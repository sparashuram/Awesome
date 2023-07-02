import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';


const Search = () => {
  const [data,setData]=useState([
    {
      id:1,
      title:"Item 1",
      completed:false
    },
    {
      id:2,
      title:"Item 2",
      completed:false
    },
    {
      id:3,
      title:"Item 3",
      completed:false
    },
  ])
  const onSelect=(ind,id)=>{
    let update=[...data]
    let index=update.findIndex((item,index)=>item.id===id)


    if(index==ind){
      if(update[index].completed==true){
        update[index].completed=false
      }else{
        update[index].completed=true
      }
    }else{
      if(update[index].completed==false){
        update[index].completed=true
      }else{
        update[index].completed=false
      }
    }
    setData(update)
  }
  return (
    <View>
     {data.map((item,index)=>(
      <TouchableOpacity key={index} onPress={()=>onSelect(index,item.id)}>
        <Text style={{padding:10,margin:10,borderWidth:1,backgroundColor:item.completed==true?"green":"white"}}>{item.title}</Text>
      </TouchableOpacity>
     ))}
    </View>
  );
}

export default Search;
