# document

- [使い方](#使い方)
- [사용법](#사용법)
- [how to use](#how-to-use)

## 使い方

このリポジトリ(Repository)はRN(React Native)でイメージあるlottieアニメーションファイルを使う方法に関する例題です。

プロジェクトを使うため下のコマンドでリポジトリ(Repository)をコピーします。

```bash
git clone https://github.com/dev-yakuza/react_native_lottie_exercise.git
```

RN(React Native)で必要なライブラリをインストールします。

```bash
npm install
```

あらかじめ定義されたスクリプトを実行してRN(React Native)プロジェクトを実行します。

```bash
# ios
npm run ios
# android
npm run android
```

アニメーションを変更したい場合、```src/Assets/animations/data.json```を変更してプラットフォーム別でイメージをコピーします。

- iOS

RN(React Native)プロジェクトフォルダで```ios/[project name].xcworkspace```(または```ios/xcodeproj```)を選択してxcodeを実行します。

![lottie ios イメージ追加](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add.png)

上のように左でプロジェクトを選択して```Resources```フォルダを右クリくして```Add Files to [project name]```を選択します。

![lottie ios イメージ追加 - ファイル選択](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add_select_file.png)

追加したいファイルを選択して、下にある```Copy items if needed```オプションを選択して追加します。

上記のように```Resources```フォルダが見えない場合、左メニューでプロジェクト名を右クリくして```New Group without Folder```を洗濯した後、追加されたグループ名を```Resources```で修正します。

![lottie ios イメージ追加 - resources グループ追加](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add_resources_group.png)

- アンドロイド

アンドロイドはiOSより簡単です。RN(React Native)プロジェクトの```android/app/src/main/assets```へアニメーションに含めてるイメージを入れるフォルダを生成します。ここでは```images```フォルダを生成しました。そしてそのフォルダにイメージをコピーします。(```android/app/src/main/assets/images```)

コピーが完了したら、下のようにソースコードへ```imageAssetsFolder={'images'}```を追加します。

```js
<LottieView
  source={require('./animation.json')}
  autoPlay
  loop
  imageAssetsFolder={'images'}
/>
```

### プロジェクトの説明

このプロジェクトはRN(React Native)を使います。RN(React Native)のインストールに関して下記のブログを参考してください。

- [React Nativeインストール](https://dev-yakuza.github.io/react-native/installation/)

また、このリポジトリはReact Nativeにタイプスクリプト(typescript)を使います。RN(React Native)にタイプスクリプト(typescript)を設定する方法については下記のブログを参考してください。

- [React Nativeにタイプスクリプト適用](https://dev-yakuza.github.io/react-native/typescript/)

RN(React Native)のスタイル(styling)には```styled-components```を使ってます。RN(React Native)でstyled-componentsを使う方法については下記のブログを参考してください。

- [React Nativeでstyled-components使う方法](https://dev-yakuza.github.io/react-native/styled-components/)

RN(React Native)でlottieを適用する方法については下記のブログを参考してください。

- [React Native에서 lottie使い方](https://dev-yakuza.github.io/react-native/react-native-lottie/)

## 사용법

이 저장소(Repository)는 RN(React Native)에서 이미지가 있는 lottie 애니메이션 파일을 사용하는 방법에 대한 예제입니다.

프로젝트를 사용하기 위해 아래에 명령어로 저장소(Repository)를 복사합니다.

```bash
git clone https://github.com/dev-yakuza/react_native_lottie_exercise.git
```

RN(React Native)에 필요한 라이브러리를 설치합니다.

```bash
npm install
```

미리 정의된 스크립트를 실행하여 RN(React Native) 프로젝트를 실행합니다.

```bash
# ios
npm run ios
# android
npm run android
```

애니메이션을 변경하여 확인하고 싶은 경우, ```src/Assets/animations/data.json```을 교체한 후, 플랫폼별로 이미지를 복사합니다.

- iOS

RN(React Native) 프로젝트 폴더에서 ```ios/[project name].xcworkspace```(또는 ```ios/xcodeproj```)를 선택하여 xcode를 실행합니다.

![lottie ios 이미지 추가](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add.png)

위와 같이 왼쪽 메뉴에서 프로젝트를 선택하고 ```Resources``` 폴더를 우클릭하여 ```Add Files to [project name]```을 선택합니다.

![lottie ios 이미지 추가 - 파일 선택](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add_select_file.png)

추가하고 싶은 파일을 선택하고, 하단에 ```Copy items if needed``` 옵션을 선택하고 추가합니다.

위와 같이 ```Resources``` 폴더가 보이지 않는 경우, 왼쪽 메뉴에서 프로젝트명을 우클릭한 후, ```New Group without Folder```를 선택하고 추가된 그룹명을 ```Resources```로 수정합니다.

![lottie ios 이미지 추가 - resources 그룹 추가](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add_resources_group.png)

- 안드로이드

안드로이드는 iOS보다 간단합니다. RN(React Native) 프로젝트의 ```android/app/src/main/assets```에 애니메이션에 포함된 이미지를 넣을 폴더를 생성합니다. 여기에서는 ```images``` 폴더를 생성하였습니다. 그리고 해당 폴더에 이미지를 복사합니다. (```android/app/src/main/assets/images```)

복사를 완료하였다면, 아래와 같이 소스코드에 ```imageAssetsFolder={'images'}```를 추가합니다.

```js
<LottieView
  source={require('./animation.json')}
  autoPlay
  loop
  imageAssetsFolder={'images'}
/>
```

### 프로젝트 상세 설명

이 프로젝트는 RN(React Native)를 사용합니다. RN(React Native) 설치에 관해서는 아래의 블로그를 참고하세요.

- [React Native 설치 방법](https://dev-yakuza.github.io/ko/react-native/installation/)

또한 이 저장소는 React Native에서 타입스크립트(typescript)를 사용합니다. RN(React Native)에서 타입스크립트(typescript)를 설정하는 방법에 대해서는 아래의 블로그를 참고하시기 바랍니다.

- [React Native에 타입스크립트 적용](https://dev-yakuza.github.io/ko/react-native/typescript/)

RN(React Native)의 스타일링(styling)에는 ```styled-components```를 사용하였습니다. RN(React Native)에서 styled-components를 사용하는 방법에 대해서는 아래 블로그를 참고하시기 바랍니다.

- [React Native에서 styled-components 사용하기](https://dev-yakuza.github.io/ko/react-native/styled-components/)

RN(React Native)에 lottie를 적용하는 방법에 대해서는 아래의 블로그를 참고하시기 바랍니다.

- [React Native에서 lottie 사용법](https://dev-yakuza.github.io/ko/react-native/react-native-lottie/)

## how to use

this repository is the example about how to use lottie with the animation file that includes images in RN(React Native).

execute the command below to clone this repository.

```bash
git clone https://github.com/dev-yakuza/react_native_lottie_exercise.git
```

install the libraries needed to execute RN(React Native).

```bash
npm install
```

execute the script already defined to start RN(React Native) project.

```bash
# ios
npm run ios
# android
npm run android
```

if you want to change the animation file, change ```src/Assets/animations/data.json``` file, and copy images to the each platforms.

- iOS

execute xcode to select ```ios/[project name].xcworkspace```(or ```ios/xcodeproj```) in RN(React Native) project.

![lottie ios add images](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add.png)

right click ```Resources``` folder below the project name on left side menu, and select ```Add Files to [project name]```

![lottie ios add images - select file](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add_select_file.png)

select image files what you want to add, select ```Copy items if needed``` options on below and add.

if you can't see ```Resources``` folder, right click the project name on left side menu, and select  ```New Group without Folder```. after adding the group, rename it to ```Resources```.

![lottie ios add images - resources add group](https://dev-yakuza.github.io/assets/images/category/react-native/react-native-lottie/lottie_ios_image_add_resources_group.png)

- Android

Android is more simple than iOS. create the folder that you copy images on ```android/app/src/main/assets``` in RN(React Native) project. in here, I created ```images``` folder. and then, copy images to that folder(```android/app/src/main/assets/images```).

after copying, modify the source code adding ```imageAssetsFolder={'images'}``` like below.

```js
<LottieView
  source={require('./animation.json')}
  autoPlay
  loop
  imageAssetsFolder={'images'}
/>
```

### Project Details

this project uses RN(React Native). if you want to know how to install RN(React Native), see the blog post below.

- [React Native installation](https://dev-yakuza.github.io/en/react-native/installation/)

also, this project uses typescript. if you want to know how to apply typescript to RN(React Native), see the blog post below.

- [how to use typescript in React Native](https://dev-yakuza.github.io/en/react-native/typescript/)

I use ```styled-components``` for styling in RN(React Native) project. if you want to know how to use styled-components in RN(React Native), see the blog post below.

- [how to use styled-components in React Native](https://dev-yakuza.github.io/en/react-native/styled-components/)

if you want to know how to apply lottie to RN(React Native), see the blog post below.

- [how to use lottie on React Native](https://dev-yakuza.github.io/en/react-native/react-native-lottie/)
