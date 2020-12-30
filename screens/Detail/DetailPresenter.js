import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { apiImage } from '../../api';
import { Poster, Votes } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';


const {width, height} = Dimensions.get('window');

const DetailPresenter = ({id, title, backdrop_path, votes, poster, overView, date, language}) => {
    return (
        <View style={{backgroundColor: 'black', flex: 1}}>
            <View style={styles.header}>
                <Image 
                    source = {{uri: apiImage(backdrop_path)}}
                    style={styles.background} 
                />
                <View style={styles.content}>
                    <Poster src={poster} />
                    <View style={{marginLeft: 20, flex: 1, alignItems: 'center'}}>
                        <Text style={styles.title}>{title}</Text>
                        {votes && <Votes vote={votes}/>}
                    </View>
                </View>
            </View>
            <View style={styles.data}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                    {overView && (
                        <>
                            <Text style={styles.dataName}>OverView</Text>
                            <Text style={styles.dataValue}>{overView}</Text>
                        </>
                    )}
                    {date && (
                        <>
                            <Text style={styles.dataName}>ReleaseDate</Text>
                            <Text style={styles.dataValue}>{date}</Text>
                        </>
                    )}

                    {language && (
                        <>
                            <Text style={styles.dataName}>Language</Text>
                            <Text style={styles.dataValue}>{language}</Text>
                        </>
                    )}
                </ScrollView>
            </View>
        </View>
    
    );
};

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overView: PropTypes.string.isRequired,
    poster: PropTypes.string,
    votes: PropTypes.number,
    date: PropTypes.number,
    language: PropTypes.string,
};

export default DetailPresenter;

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        opacity: .4,
        position: 'absolute',
    },
    header: {
        height: height/3,
        justifyContent: 'flex-end',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 10
    },
    info: {
        width: '50%',
        marginLeft: 40
    },
    data: {
        marginTop: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    dataValue: {
        color: 'white',
        opacity: .8,
        fontWeight: '500',
        marginBottom: 30
    },
    dataName: {
        color: 'white',
        opacity: .8,
        fontWeight: '800',
        marginBottom: 5
    }
})