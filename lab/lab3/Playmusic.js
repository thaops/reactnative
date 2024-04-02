import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { usePlayTrack } from './trackService';

const Playmusic = () => {
    const {
        trackTitle,
        trackArtist,
        trackArtwork,
        onSkipToNext,
        onSeekTo,
        onTogglePlayTrack,
        onSkipToPrevious,
        duration,
        position,
        playBackState
    } = usePlayTrack(songs);

    return (
        <View style={styles.container}>
            <Text>{trackTitle}</Text>
            <Text>{trackArtist}</Text>
           
            
        </View>
    );
}

export default Playmusic;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    artwork: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginVertical: 20,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    progress: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
