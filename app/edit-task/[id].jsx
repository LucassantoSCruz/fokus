import { useLocalSearchParams, router } from "expo-router";
import { Text, TextInput, View, StyleSheet, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import useTaskContext from "../../components/context/useTaskContext";
import { IconSave } from "../../components/Icons";

export default function EditTask() {
    const { id } = useLocalSearchParams();
    const { tasks, updateTask } = useTaskContext();

    const task = tasks.find(t => t.id == id);
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (task) {
            setDescription(task.description);
        }
    }, [task]);

    const handleSave = () => {
        if (!description) return;
        updateTask(task.id, description);
        router.navigate('/tasks');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.title}>Editar tarefa:</Text>
                    <Text style={styles.label}>Descreva a tarefa:</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={10}
                    />
                    <View style={styles.actions}>
                        <Pressable style={styles.button} onPress={handleSave}>
                            <IconSave />
                            <Text style={styles.buttonText}>Salvar</Text>
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        backgroundColor: '#98A0A8',
        width: '90%',
        borderRadius: 8,
        padding: 16,
        gap: 32,
    },
    title: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 26,
    },
    label: {
        fontWeight: '600',
        fontSize: 18,
    },
    input: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,
        height: 100,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});
