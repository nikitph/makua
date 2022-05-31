import {AspectRatio, Box, Center, Heading, Image, Stack} from 'native-base';
import React from 'react';
import {lorem} from './common/lorem';
import {CardData} from './types/CardData';

// @ts-ignore
export const CardComponent = (cardData: CardData) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        shadow="2"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: cardData.image_url,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5">
            {cardData.title ?? lorem.generateWords(2)}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {lorem.generateWords(2)}
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
