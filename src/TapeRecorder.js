import React, { Component } from "react";
import { Animated, SafeAreaView, View, Easing } from "react-native";
import "./TapeRecorder.css";

export class TapeRecorder extends Component {
  constructor() {
    super();
    this.state = {
      spinValue: new Animated.Value(0),
      meter1Value: new Animated.Value(0),
      meter2Value: new Animated.Value(0),
      meter3Value: new Animated.Value(0),
      meter4Value: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const {
      spinValue,
      meter1Value,
      meter2Value,
      meter3Value,
      meter4Value,
    } = this.state;

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
      }),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(meter1Value, {
          toValue: 1,
          duration: 400,
          easing: Easing.linear,
        }),
        Animated.timing(meter1Value, {
          toValue: 0,
          duration: 400,
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(meter2Value, {
          toValue: 1,
          duration: 600,
          easing: Easing.linear,
        }),
        Animated.timing(meter2Value, {
          toValue: 0,
          duration: 600,
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(meter3Value, {
          toValue: 1,
          duration: 1100,
          easing: Easing.linear,
        }),
        Animated.timing(meter3Value, {
          toValue: 0,
          duration: 1100,
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(meter4Value, {
          toValue: 1,
          duration: 880,
          easing: Easing.linear,
        }),
        Animated.timing(meter4Value, {
          toValue: 0,
          duration: 880,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  }

  render() {
    const {
      spinValue,
      meter1Value,
      meter2Value,
      meter3Value,
      meter4Value,
    } = this.state;

    const rotations = ["-60deg", "60deg"];
    const lefts = ["25%", "65%"];

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    const meter1Rotate = meter1Value.interpolate({
      inputRange: [0, 1],
      outputRange: rotations,
    });

    const meter1Left = meter1Value.interpolate({
      inputRange: [0, 1],
      outputRange: lefts,
    });

    const meter2Rotate = meter2Value.interpolate({
      inputRange: [0, 1],
      outputRange: rotations.reverse(),
    });

    const meter2Left = meter2Value.interpolate({
      inputRange: [0, 1],
      outputRange: lefts.reverse(),
    });

    const meter3Rotate = meter3Value.interpolate({
      inputRange: [0, 1],
      outputRange: rotations.reverse(),
    });

    const meter3Left = meter3Value.interpolate({
      inputRange: [0, 1],
      outputRange: lefts.reverse(),
    });

    const meter4Rotate = meter4Value.interpolate({
      inputRange: [0, 1],
      outputRange: rotations,
    });

    const meter4Left = meter4Value.interpolate({
      inputRange: [0, 1],
      outputRange: lefts,
    });

    return (
      <SafeAreaView styleName="wrapper">
        <View styleName="main">
          <Animated.View
            styleName="circle c1"
            style={{ transform: [{ rotate: spin }] }}
          >
            <View styleName="inner-C">
              <View styleName="inner-inner" />
              <View styleName="hole hole1">
                <View styleName="line h-Top" />
                <View styleName="line h-Right" />
                <View styleName="line h-Bottom" />
                <View styleName="line h-Left" />
              </View>
              <View styleName="hole hole2">
                <View styleName="line h-Top" />
                <View styleName="line h-Right" />
                <View styleName="line h-Bottom" />
                <View styleName="line h-Left" />
              </View>
              <View styleName="hole hole3">
                <View styleName="line h-Top" />
                <View styleName="line h-Right" />
                <View styleName="line h-Bottom" />
                <View styleName="line h-Left" />
              </View>
            </View>
          </Animated.View>

          <Animated.View
            styleName="circle c2"
            style={{ transform: [{ rotate: spin }] }}
          >
            <View styleName="inner-C">
              <View styleName="inner-inner" />
              <View styleName="hole hole1">
                <View styleName="line h-Top" />
                <View styleName="line h-Right" />
                <View styleName="line h-Bottom" />
                <View styleName="line h-Left" />
              </View>
              <View styleName="hole hole2">
                <View styleName="line h-Top" />
                <View styleName="line h-Right" />
                <View styleName="line h-Bottom" />
                <View styleName="line h-Left" />
              </View>
              <View styleName="hole hole3">
                <View styleName="line h-Top" />
                <View styleName="line h-Right" />
                <View styleName="line h-Bottom" />
                <View styleName="line h-Left" />
              </View>
            </View>
          </Animated.View>
          <View styleName="m2">
            <View styleName="sRec" />
            <View styleName="rec">
              <View styleName="mini-Circle mc1" />
              <View styleName="mini-Circle mc2" />
              <View styleName="mini-Circle mcBig" />

              <View styleName="line line-Left" />
              <View styleName="line line-Left2" />
              <View styleName="line line-Right" />
              <View styleName="line line-Right2" />
            </View>
          </View>

          <View styleName="m3">
            <View styleName="nobs nobs1">
              <View styleName="mini-Circle mc3" />
              <View styleName="mini-Circle mc4" />
              <View styleName="mini-Circle mc5" />
            </View>

            <View styleName="boxes boxes1">
              <View styleName="box box1">
                <Animated.View
                  styleName="meter meter1"
                  style={{
                    transform: [{ rotate: meter1Rotate }],
                    left: meter1Left,
                  }}
                />
              </View>
              <View styleName="box box2">
                <Animated.View
                  styleName="meter meter2"
                  style={{
                    transform: [{ rotate: meter2Rotate }],
                    left: meter2Left,
                  }}
                />
              </View>
            </View>

            <View styleName="boxes boxes2">
              <View styleName="box box3">
                <Animated.View
                  styleName="meter meter3"
                  style={{
                    transform: [{ rotate: meter3Rotate }],
                    left: meter3Left,
                  }}
                />
              </View>
              <View styleName="box box4">
                <Animated.View
                  styleName="meter meter4"
                  style={{
                    transform: [{ rotate: meter4Rotate }],
                    left: meter4Left,
                  }}
                />
              </View>
            </View>

            <View styleName="nobs nobs2">
              <View styleName="mini-Circle mc6" />
              <View styleName="mini-Circle mc7" />
              <View styleName="mini-Circle mc8" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
