import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { StatusBar } from 'react-native';

export function Routes() {
    return (
        <NavigationContainer>
           
            <StackRoutes />
        </NavigationContainer>
    );
}