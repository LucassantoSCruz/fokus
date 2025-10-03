import { Text, View, StyleSheet, FlatList } from "react-native";
import TaskItem from "../../components/TaskItem";
import { FokusButton } from "../../components/FokusButton"
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tasks() {

    const { tasks, deleteTask, toogleTaskCompleted } = useTaskContext()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.inner}>
                    {/* {tasks.map(t => {
                        return (
                            <TaskItem
                                completed={t.completed}
                                text={t.description}
                                key={t.id}
                            />
                        )
                    })} */}
                    <FlatList
                        data={tasks}
                        renderItem={({ item }) =>
                            <TaskItem
                                completed={item.completed}
                                text={item.description}
                                onPressDelete={() => deleteTask(item.id)}
                                onToggleComplete={() => toogleTaskCompleted(item.id)}
                                onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
                            />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                        ListHeaderComponent={
                            <Text style={styles.text}>
                                Lista de Tarefas:
                            </Text>
                        }
                        ListFooterComponent={
                            <View style={{ marginTop: 16 }}>
                                <FokusButton
                                    title="Adicionar nova tarefa"
                                    icon={<IconPlus outline />}
                                    outline
                                    onPress={() => router.navigate('/add-task')}
                                />
                            </View>
                        }
                        ListEmptyComponent={
                            <View>
                                <Text style={{ color: '#98A0A8', fontSize: 18, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                                    Ainda não há tarefas na sua lista, que tal adicionar?
                                </Text>
                            </View>
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center'
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 26,
        margin: 16
    },
    inner: {
        gap: 8,
    },

})