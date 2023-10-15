import { useRef, useState } from "react";
import { View, DrawerLayoutAndroid, StatusBar, Modal, Text } from "react-native";
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";

// Functional Component
const App = () => {
  // State Declaration
  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value

    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
      <Button text="List" onPress={() => changePage(drawer, "list")} />
      <Separator height={30} />
      <Button text="Article" onPress={() => changePage(drawer, "article")} />
      <Separator height={30} />
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
      <Separator height={30} />
      <Button text="Buka Modal" onPress={() => setModalVisible(true)} />
      <Separator height={30} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
      <View>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : null}
      </View>
       <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
            <Text>Konten Modalt</Text>
            <Button text="Tutup Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </DrawerLayoutAndroid>
  );
};

export default App;
