import React from 'react';
import {Box, Text} from 'native-base';
import {View} from 'react-native';
import {CardComponent} from '../../cardComponent';
import {lorem} from '../../common/lorem';

// @ts-ignore
export const RedirectScreen = ({route}) => {
  const {title, url} = route.params;
  return (
    <Box flex={1} safeAreaTop backgroundColor="white" alignItems={'center'}>
      <Box px={2}>
        <View style={{marginVertical: 5}}>
          <CardComponent image_url={url} title={title} />
        </View>
        <Box
          maxW="80"
          overflow="hidden"
          _light={{
            backgroundColor: 'gray.50',
          }}>
          <Text fontWeight="400" alignContent={'center'}>
            {lorem.generateParagraphs(1)}
            {lorem.generateParagraphs(1)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
