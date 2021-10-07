import { NativeModules } from 'react-native';

type CodersCameraType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CodersCamera } = NativeModules;

export default CodersCamera as CodersCameraType;
