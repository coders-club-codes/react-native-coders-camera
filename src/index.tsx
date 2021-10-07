import { NativeModules } from 'react-native';

type CodersCameraType = {
  openCamera(): Promise<string>;
};

const { CodersCamera } = NativeModules;

export default CodersCamera as CodersCameraType;
