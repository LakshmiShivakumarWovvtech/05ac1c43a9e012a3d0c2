/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, ActivityIndicator} from 'native-base';
import {View, StyleSheet, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      searchText: '',
      isloading: false,
      page: 0,
      showFilter: false,
      search: false,
      endReached: true,
    };
  }

  //   getData() {
  //     return fetch(
  //       'https://hn.algolia.com/api/v1/search_by_date?tags=story&page=' +
  //         this.state.page,
  //     )
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         this.setState({newsData: responseJson.hits});
  //         this.setState({isloading: false});
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   componentDidMount() {
  //     this.setState({isloading: true});
  //     this.getData();
  //     setInterval(() => {
  //       this.getData();
  //     }, 10000);
  //   }

  //   searchFilterData = (text) => {
  //     this.setState({endReached: false});
  //     let searchData = this.state.newsData.filter((ele) => {
  //       return (
  //         ele.author.toLowerCase().includes(text.toLowerCase()) ||
  //         ele.title.toLowerCase().includes(text.toLowerCase)()
  //       );
  //     });
  //     this.setState({newsData: searchData, search: true});
  //   };

  //   changeText = (text) => {
  //     this.setState({searchText: text});
  //     if (this.state.searchText === '') {
  //       this.setState({newsData: this.state.newsData});
  //     }
  //   };

  //   filterBy() {
  //     this.setState({showFilter: !this.state.showFilter});
  //   }

  //   searchByDate = () => {
  //     var sorted = this.state.newsData;
  //     sorted.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));
  //     this.setState({newsData: sorted});
  //   };
  //   searchByTitle = () => {
  //     var sorted = this.state.newsData;
  //     sorted.sort((a, b) => (a.title > b.title ? 1 : -1));
  //     this.setState({newsData: sorted});
  //   };

  //   renderItem(data) {
  //     return (
  //       <TouchableOpacity>
  //         <Text>{data.item.title}</Text>
  //         <Text>
  //           <Text>URL:</Text>
  //           {data.item.url}
  //         </Text>
  //         <Text>
  //           <Text>created_at:</Text>
  //           {data.item.created_at}
  //         </Text>
  //         <Text>
  //           <Text>Author:</Text>
  //           {data.item.author}
  //         </Text>
  //       </TouchableOpacity>
  //     );
  //   }
  render() {
    return (
      <View>
        <View>
          <TextInput
            placeholder="Search by Title Url and Author"
            onChangeText={(text) => this.changeText(text)}
            value={this.state.searchText}
          />

          <Button
            block
            onPress={() => this.searchFilterData(this.state.searchText)}>
            <Text>Search</Text>
          </Button>
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              marginVertical: 10,
            }}>
            <Button block style={{height: 38}}>
              <Text>Filter</Text>
            </Button>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Button block style={{width: '48%', height: 38}}>
                <Text>Created_at</Text>
              </Button>
              <Button block style={{width: '48%', height: 38}}>
                <Text>Title</Text>
              </Button>
            </View>
          </View>
          {this.state.isloading && (
            <ActivityIndicator size="large" color="#000" />
          )}
          <View>
            <FlatList
              data={this.state.newsData}
              keyExtractor={(item) => item.id}
              renderItem={(item) => this.renderItem(item)}
            />
          </View>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   textBox: {
//     marginBottom: 10,
//   },
//   textButton: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   textButtonFilter: {
//     fontWeight: 'bold',
//   },
//   listBox: {
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginVertical: 10,
//   },
//   infoText: {
//     fontSize: 16,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   infotextTitle: {
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 16,
//     color: '#444',
//     fontWeight: 'bold',
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     paddingBottom: 5,
//     margin: 3,
//   },
// });
