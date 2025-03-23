import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  
} from "react-native";

  const iconoA = require("../assets/iconos/avion.png");
  const iconoV = require("../assets/iconos/vuelo-directo.png");
  const calendario = require("../assets/iconos/calendario.png");
  const estrellasAmarillas = require("../assets/iconos/estrellasAmarillas.png");
  const estrellas = require("../assets/iconos/estrellas.png");

const { width, height } = Dimensions.get("window");

const TourDetail = () => {
  
  

  const [activeTab, setActiveTab] = useState("description");
  // comentario
  const trips = [
    {
      id: "1",
      title: "Machu Picchu",
      location: "Cusco",
      date: "Lunes 30, 10:00 am",
      amount: "199",
      image: require("../assets/images/cusco.jpg"),
      description: "Una de las maravillas del mundo. Un viaje increíble.",
      fechaGlobal: "Marzo, 2025",
      
      reviews: "5 estrellas, excelente experiencia!",

      PrimerVueloSalida: "5:30 am",
      PrimerVueloLlegada: "7:15 am",
      SegundoVueloSalida: "8:10 am",
      SegundoVueloLlegada: "9:50 am",
      TercerVueloSalida: "11:20 am",
      TercerVueloLlegada: "1:00 pm",
      CuartoVueloSalida: "2:45 pm",
      CuartoVueloLlegada: "4:30 pm",
      QuintoVueloSalida: "5:00 pm",
      QuintoVueloLlegada: "6:40 pm",
      SextoVueloSalida: "7:30 pm",
      SextoVueloLlegada: "9:15 pm",
      SéptimoVueloSalida: "10:50 pm",
      SéptimoVueloLlegada: "12:35 am",
      OctavoVueloSalida: "1:15 am",
      OctavoVueloLlegada: "3:00 am",
      NovenoVueloSalida: "3:45 am",
      NovenoVueloLlegada: "5:25 am",
      DécimoVueloSalida: "6:30 am",
      DécimoVueloLlegada: "8:10 am",

      Asientos: "19A",

      Avion: "NQ-7389",

      Puerta: "8",

      DiaDeViaje:"Sab, 22 Marz",
      DiaDeViajeD:"Dom, 23 Marz"
    },
  ];

  const renderTabContent = () => {
   

    switch (activeTab) {
      case "description":
        return <View style={styles.cajonDeTabs}>
         
          <Text style={styles.tabContent}>{trips[0].description}</Text>
          <View style={styles.boxImgOne}>
            <Image source={require("../assets/images/imagenOne.jpg")} style={styles.imageOne} />

            <Text style={styles.texDescripcion}>Las terrazas de los incas</Text>

            <Text style={styles.texImgOne}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>


          <View style={styles.boxImgTwo}>
            
            <View style={styles.miniBoxImgTwo}>
          <Image source={require("../assets/images/img conjunto/cUno.jpg")} style={styles.imageTwoS} />
          <Image source={require("../assets/images/img conjunto/cDos.jpg")} style={styles.imageTwo} />
            </View>

            <View style={styles.miniBoxImgTwo}>
          <Image source={require("../assets/images/img conjunto/cTres.jpg")} style={styles.imageTwo} />
          <Image source={require("../assets/images/img conjunto/cCuatro.jpg")} style={styles.imageTwoS} />
            </View>

            <Text style={styles.texDescripcion}>La Montaña de los Siete Colores</Text>

          <View style={styles.boxTexTwo}>
            <Text style={styles.texImgOne}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
            

          </View>

          



        

          
          
        </View>

      case "schedule":
        return <View style={styles.cajonDeTabs}>

                  <View>

                    <View style={styles.boxDias}>
                      <View style={styles.boxCalendario}>
                        <Image style={styles.imgCalendario} source={calendario} />
                        <Text style={styles.textFecha}>Dia</Text>
                      </View>
                      <View style={styles.boxCalendario}>
                      <Text style={styles.textFecha}>{trips[0].fechaGlobal}</Text>
                      </View>
                    </View>

                    <View style={styles.DiasSemana}>
                      <View style={styles.boxDiasSemana}>
                        <Text style={styles.Dias}>L</Text>
                        <Text style={styles.Dias}>17</Text>
                      </View>

                      <View style={styles.boxDiasSemana}>
                        <Text style={styles.Dias}>M</Text>
                        <Text style={styles.Dias}>18</Text>
                      </View>

                      <View style={styles.boxDiasSemana}>
                        <Text style={styles.Dias}>X</Text>
                        <Text style={styles.Dias}>19</Text>
                      </View>

                      <View style={styles.boxDiasSemana}>
                        <Text style={styles.Dias}>J</Text>
                        <Text style={styles.Dias}>20</Text>
                      </View>

                      <View style={styles.boxDiasSemana}>
                        <Text style={styles.Dias}>V</Text>
                        <Text style={styles.Dias}>21</Text>
                      </View>

                      <View style={[styles.boxDiasSemana, styles.S]}>
                        <Text style={styles.Dias}>S</Text>
                        <Text style={styles.Dias}>22</Text>
                      </View>

                      <View style={styles.boxDiasSemana}>
                        <Text style={styles.Dias}>D</Text>
                        <Text style={styles.Dias}>23</Text>
                      </View>
                   


                    </View>
                    


                  </View>

                  <View style={styles.boxViajes}>


                      <View style={styles.boxTitleViaje}>
                        <Text style={styles.ordenViaje}>PrimerVuelo</Text>

                        <View style={styles.boxAvion}>
                          <Image source={iconoA} />
                        </View>
                      </View>

                      <View style={styles.boxInformacionDeViaje}>

                        <View style={styles.boxLugar}>

                          <Text style={styles.Lugar}>Lima</Text>
                          <Image source={iconoV} />
                          <Text style={styles.Lugar}>Cusco</Text>

                        </View>

                        <View style={styles.boxFechaDeViaje}>
                          <Text style={styles.texHorarios}>{trips[0].PrimerVueloSalida}</Text>
                          <Text style={styles.texHorarios}>{trips[0].PrimerVueloLlegada}</Text>
                        </View>

                        <View style={styles.boxFechaDeViaje}>
                          <Text style={styles.diaDeViaje}>{trips[0].DiaDeViaje}</Text>
                          <Text style={styles.diaDeViaje}>{trips[0].DiaDeViajeD}</Text>
                        </View>

                      <View style={styles.boxInformacionDelAvion}>
                        <View style={styles.boxInformacionDelViaje}>
                          <Text style={styles.titleAsientos}>Asiento</Text>
                          <Text style={styles.Asiento}>{trips[0].Asientos}</Text>
                        </View>

                        <View style={styles.boxInformacionDelViaje}>
                        <Text style={styles.titleAsientos}>Avion</Text>
                          <Text style={styles.Asiento}>{trips[0].Avion}</Text>
                        </View>
                        <View style={styles.boxInformacionDelViaje}>
                        <Text style={styles.titleAsientos}>Puerta</Text>
                          <Text style={styles.Asiento}>{trips[0].Puerta}</Text>
                        </View>
                      </View>

                    </View>

                      

                    

                  </View>

                  <View style={styles.boxViajes}>


                      <View style={styles.boxTitleViaje}>
                        <Text style={styles.ordenViaje}>PrimerVuelo</Text>

                        <View style={styles.boxAvion}>
                          <Image source={iconoA} />
                        </View>
                      </View>

                      <View style={styles.boxInformacionDeViaje}>

                        <View style={styles.boxLugar}>

                          <Text style={styles.Lugar}>Lima</Text>
                          <Image source={iconoV} />
                          <Text style={styles.Lugar}>Cusco</Text>

                        </View>

                        <View style={styles.boxFechaDeViaje}>
                          <Text style={styles.texHorarios}>{trips[0].PrimerVueloSalida}</Text>
                          <Text style={styles.texHorarios}>{trips[0].PrimerVueloLlegada}</Text>
                        </View>

                        <View style={styles.boxFechaDeViaje}>
                          <Text style={styles.diaDeViaje}>{trips[0].DiaDeViaje}</Text>
                          <Text style={styles.diaDeViaje}>{trips[0].DiaDeViajeD}</Text>
                        </View>

                      <View style={styles.boxInformacionDelAvion}>
                        <View style={styles.boxInformacionDelViaje}>
                          <Text style={styles.titleAsientos}>Asiento</Text>
                          <Text style={styles.Asiento}>{trips[0].Asientos}</Text>
                        </View>

                        <View style={styles.boxInformacionDelViaje}>
                        <Text style={styles.titleAsientos}>Avion</Text>
                          <Text style={styles.Asiento}>{trips[0].Avion}</Text>
                        </View>
                        <View style={styles.boxInformacionDelViaje}>
                        <Text style={styles.titleAsientos}>Puerta</Text>
                          <Text style={styles.Asiento}>{trips[0].Puerta}</Text>
                        </View>
                      </View>

                    </View>

                      

                    

                  </View>

                  <View style={styles.boxViajes}>


                      <View style={styles.boxTitleViaje}>
                        <Text style={styles.ordenViaje}>PrimerVuelo</Text>

                        <View style={styles.boxAvion}>
                          <Image source={iconoA} />
                        </View>
                      </View>

                      <View style={styles.boxInformacionDeViaje}>

                        <View style={styles.boxLugar}>

                          <Text style={styles.Lugar}>Lima</Text>
                          <Image source={iconoV} />
                          <Text style={styles.Lugar}>Cusco</Text>

                        </View>

                        <View style={styles.boxFechaDeViaje}>
                          <Text style={styles.texHorarios}>{trips[0].PrimerVueloSalida}</Text>
                          <Text style={styles.texHorarios}>{trips[0].PrimerVueloLlegada}</Text>
                        </View>

                        <View style={styles.boxFechaDeViaje}>
                          <Text style={styles.diaDeViaje}>{trips[0].DiaDeViaje}</Text>
                          <Text style={styles.diaDeViaje}>{trips[0].DiaDeViajeD}</Text>
                        </View>

                      <View style={styles.boxInformacionDelAvion}>
                        <View style={styles.boxInformacionDelViaje}>
                          <Text style={styles.titleAsientos}>Asiento</Text>
                          <Text style={styles.Asiento}>{trips[0].Asientos}</Text>
                        </View>

                        <View style={styles.boxInformacionDelViaje}>
                        <Text style={styles.titleAsientos}>Avion</Text>
                          <Text style={styles.Asiento}>{trips[0].Avion}</Text>
                        </View>
                        <View style={styles.boxInformacionDelViaje}>
                        <Text style={styles.titleAsientos}>Puerta</Text>
                          <Text style={styles.Asiento}>{trips[0].Puerta}</Text>
                        </View>
                      </View>

                    </View>

                      

                    

                  </View>
                
   
                </View> 

      case "reviews":
        return <View style={styles.cajonDeTabs}>
        

        <View style={styles.boxCalificacion}>

          <View style={styles.miniBoxCalificacion}>
            <View>
              <Text style={styles.textCalificacion}>5</Text>
              <Text style={styles.textCalificacionInferior}>★★★★★</Text>

            </View>

            <View>
            <Text style={styles.textCalificacion}>115</Text>
              <Text style={styles.textCalificacionInferior}>EVALUACIONES</Text>

            </View>
          </View>

      

        </View>


       
       
     </View> 
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.container_img}>
                <Image source={item.image} style={styles.image} />
                
                <View style={styles.infoContainer}>
                
                  <Text style={styles.tripTitle}>{item.title}</Text>
                  <Text style={styles.tripTitle}>S/.{item.amount}</Text>
                </View>
              </View>
              




              {/* Pestañas debajo de la imagen */}
              <View style={styles.tabsContainer}>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "description" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("description")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "description" && styles.activeTabText,
                    ]}
                  >
                    Descripción
                  </Text>
                  
                </TouchableOpacity>
                
                
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "schedule" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("schedule")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "schedule" && styles.activeTabText,
                    ]}
                  >
                    Horario
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === "reviews" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("reviews")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "reviews" && styles.activeTabText,
                    ]}
                  >
                    Reseñas
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Mostrar contenido de la pestaña activa */}
              {renderTabContent()}
            </View>
          )}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        />
      </View>
    </ScrollView>
  );
};

export default TourDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
  },
  image: {
    width: "100%",
    height: width * 0.8,
    borderRadius: 24,
  },
  container_img: {
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },
  infoContainer: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 8,
  },
  tripTitle: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "black",
  },
  date: {
    fontSize: 14,
    color: "black",
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#6A0DAD",
    borderRadius:20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  activeTabText: {
    color: "#6A0DAD",
    fontWeight: "bold",
  },
  tabContent: {
    padding: 15,
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },

  cajonDeTabs:{
    width: "100%",
    height: "auto",
    padding: 20,
    marginTop: 15,
    backgroundColor:"#fff",
    borderRadius:20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
  },

  
  boxImgOne:{
    width: "100%",
    height:"auto",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30,
    borderTopWidth: 2, 
    borderBottomWidth: 2,
    borderColor: "#2E1A47", 
    padding:20,
  },

  imageOne:{
    width:"100%",
    height: width * 0.7,
    borderRadius:30,
    marginBottom: 5,
  },

  texDescripcion:{
    fontSize: width * 0.06,
    borderBottomWidth: 2,
    borderColor: "#2E1A47", 
    color:"#2E1A47",
    textAlign:"center",
    marginVertical:10,
    marginHorizontal:10,

  },

  texImgOne:{
    fontSize: width * 0.04,
    color:"#2E1A47",

  },

  boxImgTwo:{
    width: "100%",
    height:"auto",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30,
    borderTopWidth: 2, 
    borderBottomWidth: 2,
    borderColor: "#2E1A47", 
    paddingTop:5,
    marginTop:10,
  },

  miniBoxImgTwo:{
    width: "100%",
    height:"auto",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    borderRadius:30,
    padding:10,

   
  },

  imageTwoS:{
    width: "50%",
    height: width * 0.2,
    borderRadius:10,
  },

  
  imageTwo:{
    width: "40%",
    height: width * 0.2,
    borderRadius:10,
  },

  boxTexTwo:{
    width: "100%",
    height:"auto",
    paddingHorizontal:20,
    paddingBottom:20,

  },
  texImgTwo:{
    fontSize: width * 0.04,
    color:"#2E1A47",
  
  },

  boxDias:{
    width: "100%",
    height:"auto",
    flexDirection:"row",
    justifyContent:"space-evenly",
    

  },

  boxCalendario:{
    width: "auto",
    height:"auto",
    borderRadius:15,
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    paddingHorizontal:10,
    paddingVertical:5,
  },

  imgCalendario:{
    marginRight:10,
  },

  DiasSemana:{
    width: "auto",
    height:"auto",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    paddingVertical:10,

  },

  boxDiasSemana:{
    width: "auto",
    height:"auto",
    alignItems:"center",
    justifyContent:"space-around",
    borderRadius:15,
    borderWidth: 1,
    borderColor: "#000000",
    padding:5,

  },

  S:{
    backgroundColor:"#B2F7EF"
  },



  Dias:{
    fontSize: height * 0.02,
  },

  boxViajes:{
    width: "100%",
    height:"auto",
    flexDirection:"row",
    borderRadius:15,
    borderWidth: 1,
    borderColor: "#000000",
    marginVertical:10, 
  
  },

  textFecha:{
    fontSize: width * 0.06,
  },

  boxTitleViaje:{
  width:"20%",
  alignItems:"center",
  justifyContent:"center",
  borderWidth: 1,
  borderColor: "#000000",
  borderTopLeftRadius: 15, 
  borderBottomLeftRadius: 15,
  justifyContent:"space-evenly",
  backgroundColor:"#B2F7EF",
 
  },

  ordenViaje: {
    transform: [{ rotate: "270deg" }],
    fontSize: height * 0.02,
    marginTop:25,
    color: "#6A0DAD",
  },

  boxAvion:{
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"space-evenly",
    backgroundColor:"#000000",
    borderRadius: 50,
  },

  boxInformacionDeViaje:{
    width:"80%",
    borderRadius:15,
    padding:5,

  },

  boxLugar:{
    width:"100%",
    height:100,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    borderBottomWidth: 2,
    borderBottomColor: "#000000", 
    marginBottom:10,

  },

  Lugar:{
    fontSize: height * 0.04,
    color:"#000000"
  },

  boxFechaDeViaje:{
    width:"100%",
    height:30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
   
  },
  
  diaDeViaje:{
    fontSize: height * 0.015,
    color:"#000000",
    
  },

  texHorarios:{
    fontSize: height * 0.025,
    color:"#000000"
  },

  boxInformacionDelAvion:{
    width:"100%",
    height:70,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",

  },

  titleAsientos:{
    fontSize: height * 0.015,
  },

  Asiento:{
    fontSize: height * 0.02,
  },

  boxCalificacion:{
    width:"100%",
    height:"auto",

  },

  miniBoxCalificacion:{
    width:"100%",
    height:"auto",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
  },

  textCalificacion:{
    textAlign:"center",
    fontSize: height * 0.025,
  },

  textCalificacionInferior:{
    textAlign:"center",
    fontSize: height * 0.015,
  },




});
