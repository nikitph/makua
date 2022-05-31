import React from 'react';
import {Box, Spinner} from 'native-base';
import {useInfiniteQuery} from 'react-query';
import {picsApi} from '../../api';
import {FlatList, TouchableOpacity} from 'react-native';
import {CardComponent} from '../../cardComponent';
import {END_THRESHOLD} from '../../config';

// @ts-ignore
export const FeedScreen = ({navigation}) => {
  let pageNo = 0;
  const {isLoading, data, fetchNextPage} = useInfiniteQuery(
    'pics',
    picsApi.fetchPics,
    {
      getNextPageParam: () => {
        return ++pageNo;
      },
    },
  );
  const picItemExtractorKey = (item: any) => {
    return item.id + new Date().getUTCMilliseconds();
  };

  const loadMore = async () => {
    await fetchNextPage();
  };

  const renderData = (item: any) => {
    return (
      <TouchableOpacity
        style={{marginVertical: 5}}
        onPress={() =>
          navigation.navigate('Redirect', {
            title: item.item.author,
            url: item.item.download_url,
          })
        }>
        <CardComponent
          image_url={item.item.download_url}
          title={item.item.author}
        />
      </TouchableOpacity>
    );
  };
  return isLoading ? (
    <Box
      flex={1}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center">
      <Spinner color="emerald.500" size="lg" />
    </Box>
  ) : (
    <Box flex={1} safeAreaTop backgroundColor="white">
      {isLoading && <Spinner color="emerald.500" size="lg" />}
      <Box px={2}>
        <FlatList
          data={data?.pages.map(page => page).flat()}
          keyExtractor={picItemExtractorKey}
          renderItem={renderData}
          scrollEnabled={true}
          onEndReached={loadMore}
          onEndReachedThreshold={END_THRESHOLD}
        />
      </Box>
    </Box>
  );
};
