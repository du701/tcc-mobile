import { View, StyleSheet,Text, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Faça login com sua conta</Text>
      <Text style={styles.subtitulo}> é bom te ver novamente </Text>
    <Text style={styles.email}> email </Text>
    <TextInput
      style={styles.input}
      placeholder="Coloque seu email"
      
    />
    <Text style={styles.email}> Senha </Text>
    <TextInput
      style={styles.input}
      placeholder="Coloque sua senha"
      
    />
    <View  style={styles.botn}>
    <Text>
      Login
    </Text>
    </View><View  style={styles.botm}>
    <Text>
      Faça seu login com o Google
    </Text>
    </View>
    <View style={styles.botb}> 
      <Text  style={styles.bota}>
        Esqueceu sua senha?
      </Text>
      <Text  style={styles.bote}> Recupera sua senha

      </Text>
    </View>
    <View style={styles.botb}> 
      <Text  style={styles.bota}>
        Nao tem conta ainda?
      </Text>
      <Text  style={styles.bote}>  Cadastre-se

      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    padding: 8,
    marginTop: 30,
  }
  ,
  titulo: {
    color: "#733A8E"
    , fontWeight: "900",
    fontSize: 30
  },
 subtitulo :{
   color: "#808080",
   marginTop: 10,
  
 },input :{
   color: "#808080",
   marginTop: 0,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#E6E6E6",
  paddingHorizontal:20,
  paddingVertical:15,
 borderRadius: 20,
 fontSize: 25,
 marginBottom: 20

 }
  , email: {
    width: '50%',
    color: "#733A8E",
    textAlign: "left",
    
  },botn:{
    width: "75%",
    backgroundColor: "#E7E5EC",
    paddingVertical: 10,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 20,
   marginBottom: 100

  }
,botm:{
  width: "75%",
  backgroundColor: "#CCCCCC",
  paddingVertical: 10,
  display: "flex",
  alignItems: 'center',
  justifyContent: "center",
  borderRadius: 0,


}
 ,botb:{
  display: "flex",
  flexDirection: "row",
  marginBottom: 150
 }
, bote:{
  color:"#3B7A58",
  marginLeft: 3,
}
,bota:{
  color:"#733A8E",
  marginLeft: 5
  
}
});
