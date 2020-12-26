import React from 'react';
import PropTypes from 'prop-types';
import ScrollContainer from '../../components/ScrollContainer';
import { StatusBar, TextInput, StyleSheet, View, Text } from 'react-native';
import HorizontalSlide from '../../components/HorizontalSlide';
import Horizontal from '../../components/Horizental';


const SeachPresenter = ({movies, tvs, keyword, onChange, onSubmit, placeHolder, loading}) => {
    return (
        <ScrollContainer loadin={loading}
            contentContainerStyle={{paddingTop: 10}}
        >
            <StatusBar barStyle="light-content" />
            <TextInput 
                style={styles.textInput}
                value={keyword}
                onChangeText={onChange}
                placeholder={placeHolder}
                onSubmitEditing={onSubmit}
                returnKeyType={"Search"}
            />
            {movies.length !== 0 && (
                <HorizontalSlide title={'Movie Results'}>
                    {movies.map(movie => (
                        <Horizontal 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster={movie.poster_path}
                            votes={movie.vote_average}
                        />
                    ))}
                </HorizontalSlide>
            )}
            {tvs.length !== 0 && (
                <HorizontalSlide title={'Tv Results'}>
                    {tvs.map(tv => (
                        <Horizontal 
                            key={tv.id}
                            id={tv.id}
                            title={tv.name}
                            poster={tv.poster_path}
                            votes={tv.vote_average}
                        />
                    ))}
                </HorizontalSlide>
            )}
        </ScrollContainer>
    );
};

SeachPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.array,
    tvs: PropTypes.array,
    keyword: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    placeHolder: PropTypes.string.isRequired
};

export default SeachPresenter;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 50
    }
})