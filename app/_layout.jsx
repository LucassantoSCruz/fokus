import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#021123'
                },
                headerTintColor: '#FFF',
                drawerStyle: {
                    backgroundColor: '#021123'
                },
                drawerLabelStyle: {
                    color: '#FFF'
                }
            }}
        >
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: 'index',
                    title: 'index',
                    headerShown: false,
                    drawerItemStyle: { display: 'none' }
                }}
            />
            <Drawer.Screen
                name="pomodoro"
                options={{
                    drawerLabel: 'Timer',
                    title: '',
                }}
            />
            <Drawer.Screen
                name="add-task/index"
                options={{
                    drawerItemStyle: { display: 'none' },
                    title: '',
                    headerLeft: () => {
                        return <Ionicons name="arrow-back" size={24} color="white" style={{marginLeft: 16}} onPress={() => router.navigate('/tasks')}/>
                    }
                }}
            />
            <Drawer.Screen
                name="tasks/index"
                options={{
                    drawerLabel: 'Lista de Tarefas',
                    title: '',
                }}
            />
        </Drawer>
    );
}
