import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Alert from '../customs/Alerta';

const paymentMethods = ['VISA', 'Transferencia', 'Yape'];

const GenerarReserva = ({ visible, onClose, hotel }) => {
    const [cantidadPersonas, setCantidadPersonas] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [fecha, setFecha] = useState('');
    const [correo, setCorreo] = useState('');
    const [alertMessage, setAlertMessage] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleConfirm = () => {
        if (!cantidadPersonas || !metodoPago || !fecha || !correo) {
            setAlertMessage({ type: 'error', text: 'Todos los campos son obligatorios.' });
            return;
        }

        setAlertMessage({ type: 'success', text: 'Reserva generada con éxito. En breve recibirá un correo de confirmación.' });

        setTimeout(() => {
            setAlertMessage(null);
            onClose();
        }, 3000);
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Reservar en {hotel?.nombre}</Text>

                    <TextInput
                        placeholder="Cantidad de personas"
                        keyboardType="numeric"
                        value={cantidadPersonas}
                        onChangeText={setCantidadPersonas}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.dropdown} onPress={() => setShowDropdown(!showDropdown)}>
                        <Text style={styles.dropdownText}>{metodoPago || 'Selecciona método de pago'}</Text>
                    </TouchableOpacity>
                    {showDropdown && (
                        <FlatList
                            data={paymentMethods}
                            keyExtractor={(item) => item}
                            style={styles.dropdownList}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setMetodoPago(item); setShowDropdown(false); }}>
                                    <Text style={styles.dropdownItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}

                    <TextInput
                        placeholder="Fecha de reserva"
                        value={fecha}
                        onChangeText={setFecha}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Correo electrónico"
                        keyboardType="email-address"
                        value={correo}
                        onChangeText={setCorreo}
                        style={styles.input}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={onClose}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleConfirm}>
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {alertMessage && <Alert type={alertMessage.type} message={alertMessage.text} onClose={() => setAlertMessage(null)} />}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#1E293B',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E6B400',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    dropdown: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    dropdownText: {
        color: '#000',
    },
    dropdownList: {
        width: '100%',
        backgroundColor: '#fff',
        maxHeight: 150,
        borderRadius: 5,
        marginBottom: 10,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    dropdownItemText: {
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%',
    },
    button: {
        flex: 1,
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    confirmButton: {
        backgroundColor: '#2980B9',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default GenerarReserva;