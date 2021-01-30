import React, { useState, createContext, useEffect, useCallback } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [userOrder, setUserOrder] = useState([]);
    const [userTotalPrice, setTotalPrice] = useState(0);
    const [cleanUserOrder, setCleanUserOrder] = useState(false);

    const updateUserOrder = useCallback((data) => {
        setUserOrder( data );
    }, [userOrder]);

    const updateTotalPrice = useCallback((data) => {
        let totalPrice = 0;

        data.forEach(element => {
            totalPrice+=element.price;
        });

        setTotalPrice(totalPrice);
    }, [userTotalPrice]);

    async function signUp(name, address, telephone, email, password) {
        setLoadingAuth(true);
        await auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            await firestore().collection('users')
            .doc(uid).set({
                name: name,
                address: address,
                telephone: telephone
            })
            .then( () => {
                let data = {
                    uid: uid,
                    name: name,
                    address: address,
                    telephone: telephone,
                    email: value.user.email
                };

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch( (error) => {
            console.log(error);
            setLoadingAuth(false);
        })
    }

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('pizzaMSApp');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();
    }, []);

    async function signIn(email, password) {
        setLoadingAuth(true);

        await auth().signInWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            const userProfile = await firestore().collection('users')
            .doc(uid).get();

            let data = {
                uid: uid,
                name: userProfile.data().name,
                address: userProfile.data().address,
                telephone: userProfile.data().telephone,
                email: value.user.email,
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
        } )
        .catch( (error) => {
            alert(error);
            setLoadingAuth(false);
        } )
    }

    async function signOut() {
        await auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
            setUserOrder([]);
        } )
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('pizzaMSApp', JSON.stringify(data));
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signUp, signIn, signOut, loadingAuth, loading, storageUser, setUser, userOrder, setUserOrder, updateUserOrder, updateTotalPrice, userTotalPrice, cleanUserOrder, setCleanUserOrder }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;