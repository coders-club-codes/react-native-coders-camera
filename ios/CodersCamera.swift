@objc(CodersCamera)
class CodersCamera: NSObject {

    @objc(openCamera:withRejecter:)
    func openCamera(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let imagePicker = UIImagePickerController();
        imagePicker.sourceType = .photoLibrary;

        DispatchQueue.main.async {
          RCTPresentedViewController()?.present(imagePicker, animated: true);
        }

        resolve("Camera aberta com sucesso!")
    }
}
