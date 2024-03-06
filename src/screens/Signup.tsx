import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSVG from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from "@components/Input";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {

    const navigation = useNavigation()

    const handleGoBack = () => [
        navigation.goBack()
    ]

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image 
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Background"
                    resizeMode="contain"
                    position="absolute"
                />
                <Center my={24}>
                    <LogoSVG />
                    <Text color='gray.100' fontSize='sm'>Treine sua mente e o seu corpo</Text>
                </Center>

                <Center>
                    <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
                       Crie sua conta
                    </Heading>

                    <Input 
                        placeholder="Nome"
                    />

                    <Input 
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none" 
                    />
                    <Input 
                        placeholder="Senha"
                        secureTextEntry
                    />

                    <Button title="Criar e acessar"/>
                </Center>

                <Button
                    onPress={handleGoBack}
                    mt={24}
                    title="Voltar para o login" 
                    variant='outline' 
                />
            </VStack>
        </ScrollView>
    )
}