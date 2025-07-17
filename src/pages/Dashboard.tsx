import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import { 
  Activity, 
  Calendar, 
  Target, 
  TrendingUp, 
  Dumbbell, 
  Apple,
  Clock,
  Trophy,
  Settings,
  LogOut,
  Plus,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [progressData, setProgressData] = useState<any[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/login");
        return;
      }

      setUser(session.user);
      await fetchUserData(session.user.id);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          setUser(null);
          navigate("/login");
        } else if (session) {
          setUser(session.user);
          fetchUserData(session.user.id);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchUserData = async (userId: string) => {
    try {
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('Error fetching profile:', profileError);
      } else {
        setProfile(profileData);
      }

      // Fetch recent workouts
      const { data: workoutData, error: workoutError } = await supabase
        .from('workouts')
        .select('*')
        .eq('user_id', userId)
        .order('completed_at', { ascending: false })
        .limit(5);

      if (workoutError) {
        console.error('Error fetching workouts:', workoutError);
      } else {
        setWorkouts(workoutData || []);
      }

      // Fetch progress data
      const { data: progressData, error: progressError } = await supabase
        .from('progress_entries')
        .select('*')
        .eq('user_id', userId)
        .order('recorded_at', { ascending: false })
        .limit(10);

      if (progressError) {
        console.error('Error fetching progress:', progressError);
      } else {
        setProgressData(progressData || []);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          title: "Error",
          description: "Failed to sign out",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Signed out",
          description: "You have been signed out successfully",
        });
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const addSampleWorkout = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('workouts')
        .insert({
          user_id: user.id,
          name: "Morning Cardio",
          duration_minutes: 30,
          calories_burned: 250,
          workout_type: "cardio",
          notes: "Great energy boost!"
        });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to add workout",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Workout added successfully!",
        });
        // Refresh workouts
        fetchUserData(user.id);
      }
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cult Fitness
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {profile?.display_name || user?.email}!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Workouts</CardTitle>
              <Dumbbell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workouts.length}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="card-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {workouts.reduce((total, workout) => total + (workout.calories_burned || 0), 0)}
              </div>
              <p className="text-xs text-muted-foreground">Total this month</p>
            </CardContent>
          </Card>

          <Card className="card-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {profile?.weight ? `${profile.weight} kg` : "Not set"}
              </div>
              <p className="text-xs text-muted-foreground">Current status</p>
            </CardContent>
          </Card>

          <Card className="card-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fitness Goal</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {profile?.fitness_goal || "Not set"}
              </div>
              <p className="text-xs text-muted-foreground">Your target</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Workouts */}
          <Card className="card-lift">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Workouts</CardTitle>
                  <CardDescription>Your latest training sessions</CardDescription>
                </div>
                <Button onClick={addSampleWorkout} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Workout
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {workouts.length > 0 ? (
                <div className="space-y-4">
                  {workouts.map((workout) => (
                    <div key={workout.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Dumbbell className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{workout.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {workout.duration_minutes} min • {workout.calories_burned} cal
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">{workout.workout_type}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Dumbbell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No workouts yet</p>
                  <p className="text-sm text-muted-foreground mb-4">Start your fitness journey!</p>
                  <Button onClick={addSampleWorkout} size="sm">
                    Add Your First Workout
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Progress Chart */}
          <Card className="card-lift">
            <CardHeader>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>Track your fitness journey</CardDescription>
            </CardHeader>
            <CardContent>
              {progressData.length > 0 ? (
                <div className="space-y-4">
                  {progressData.slice(0, 5).map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <BarChart3 className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium capitalize">{entry.metric_type.replace('_', ' ')}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(entry.recorded_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{entry.value} {entry.unit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No progress data yet</p>
                  <p className="text-sm text-muted-foreground">Start tracking your metrics!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="p-6 h-auto flex flex-col gap-2">
              <Dumbbell className="h-6 w-6" />
              <span>Log Workout</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex flex-col gap-2">
              <Apple className="h-6 w-6" />
              <span>Track Nutrition</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span>Schedule Workout</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex flex-col gap-2">
              <Trophy className="h-6 w-6" />
              <span>View Progress</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;