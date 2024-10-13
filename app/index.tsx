import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {

  const [counter, setCounter] = useState(0);
  const [mynumber, setMynumber] = useState("");
  const [errormessage, setErrormessage] = useState("");





  function dosomeplus() {

    const innumb = Number(mynumber);

    if (isNaN(innumb)) {
      // Inte siffra
      setErrormessage("Du skrev fel!!!");
    } else {
      setErrormessage("");
      setCounter(counter + innumb);

      if (counter > 99) {
        setCounter(0);
      }

    }



  }

  function dosomeminus() {
    setCounter(counter - 1);

    if (counter < 0) {
      setCounter(0);
    }
  }



  return (

    <View

      style={{
        flex: 1, justifyContent: "up",
        alignItems: "center"
      }}>

      <Text style={{ fontSize: 150 }}> {counter}</Text>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>

        {errormessage != "" &&

          <Text style={{ borderWidth: 3, width: 200, height: 80, }}>{errormessage}</Text>
        }
        <TextInput
          onChangeText={setMynumber}
          value={mynumber}
          style={{ borderWidth: 1, width: 100 }} />

        <Button
          onPress={dosomeplus}
          title="PLUS"
        />

        <Button
          onPress={dosomeminus}
          title="MINUS"
        />




       

      </View>



      <View style={{ flex:1,  }}></View>
<View>
{counter > 0 &&
          <Button
            onPress={() => { setCounter(0); }}
            title="RESET"
            color="red"
            
          />
        }


</View>

    </View>

  );
}
