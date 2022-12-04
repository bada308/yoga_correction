const treeStandard = [
  { x: 0.16241682, y: 0.5007238, score: 0.53869903 },
  { x: 0.14587405, y: 0.51914084, score: 0.47752625 },
  { x: 0.14731318, y: 0.48310924, score: 0.51770985 },
  { x: 0.16384879, y: 0.544867, score: 0.510984 },
  { x: 0.16955784, y: 0.4626841, score: 0.6206786 },
  { x: 0.2598918, y: 0.59618706, score: 0.74873036 },
  { x: 0.26740462, y: 0.4210043, score: 0.8153396 },
  { x: 0.39412853, y: 0.6167465, score: 0.80728865 },
  { x: 0.41477227, y: 0.40693492, score: 0.64461505 },
  { x: 0.32187313, y: 0.5356008, score: 0.5580712 },
  { x: 0.32387924, y: 0.4771081, score: 0.60578036 },
  { x: 0.5179696, y: 0.5415411, score: 0.8407237 },
  { x: 0.50300413, y: 0.4420349, score: 0.87243736 },
  { x: 0.7384564, y: 0.5190309, score: 0.7818619 },
  { x: 0.6385196, y: 0.28179663, score: 0.77432364 },
  { x: 0.9159411, y: 0.49398446, score: 0.7414247 },
  { x: 0.6145544, y: 0.4630981, score: 0.6620779 },
];

const treeStandardAngle = {
  right_leg: 32.69,
  right_arm: 32.21,
  left_arm: 39.6,
};

/*
 NOSE = 0;
 LEFT_EYE = 1;
 RIGHT_EYE = 2;
 LEFT_EAR = 3;
 RIGHT_EAR = 4;
 LEFT_SHOULDER = 5;
 RIGHT_SHOULDER = 6;
 LEFT_ELBOW = 7;
 RIGHT_ELBOW = 8;
 LEFT_WRIST = 9;
 RIGHT_WRIST = 10;
 LEFT_HIP = 11;
 RIGHT_HIP = 12;
 LEFT_KNEE = 13;
 RIGHT_KNEE = 14;
 LEFT_ANKLE = 15;
 RIGHT_ANKLE = 16;
*/

export const updateRightLegAngle = (poses) => {
  const rightHip = poses[0].keypoints[12];
  const rightKnee = poses[0].keypoints[14];
  const rightAnkle = poses[0].keypoints[16];

  //const msg = new SpeechSynthesisUtterance("Keep your back straight");

  let returnAngle = 0;
  let angle = 0;

  const angle1 = Math.atan2(rightHip.y - rightKnee.y, rightHip.x - rightKnee.x);
  const angle2 = Math.atan2(
    rightAnkle.y - rightKnee.y,
    rightAnkle.x - rightKnee.x
  );

  if (angle1 >= angle2) {
    angle = (angle1 - angle2) * (180 / Math.PI);
    angle = angle % 180;
  } else {
    angle = (angle2 - angle1) * (180 / Math.PI);
    angle = angle % 180;
  }

  if (rightAnkle.score > 0.3 && rightHip.score > 0.3 && rightKnee.score > 0.3) {
    returnAngle = angle;
  }

  /*if (returnAngle > treeStandardAngle.right_leg + 15) {
    if (backWarningGiven === false) {
      window.speechSynthesis.speak(msg);
    }
    backWarningGiven = true;
  }*/
  return returnAngle;
};

export const updateRightArmAngle = (poses) => {
  const rightShoulder = poses[0].keypoints[6];
  const rightElbow = poses[0].keypoints[8];
  const rightWrist = poses[0].keypoints[10];
  let returnAngle = 0;
  let angle = 0;

  const angle1 = Math.atan2(
    rightShoulder.y - rightElbow.y,
    rightShoulder.x - rightElbow.x
  );
  const angle2 = Math.atan2(
    rightWrist.y - rightElbow.y,
    rightWrist.x - rightElbow.x
  );

  if (angle1 >= angle2) {
    angle = (angle1 - angle2) * (180 / Math.PI);
    angle = angle % 180;
  } else {
    angle = (angle2 - angle1) * (180 / Math.PI);
    angle = angle % 180;
  }

  if (
    rightWrist.score > 0.3 &&
    rightElbow.score > 0.3 &&
    rightShoulder.score > 0.3
  ) {
    returnAngle = angle;
  }

  return returnAngle;
};

export const updateLeftArmAngle = (poses) => {
  const leftShoulder = poses[0].keypoints[5];
  const leftElbow = poses[0].keypoints[7];
  const leftWrist = poses[0].keypoints[9];
  let returnAngle = 0;
  let angle = 0;

  const angle1 = Math.atan2(
    leftShoulder.y - leftElbow.y,
    leftShoulder.x - leftElbow.x
  );
  const angle2 = Math.atan2(
    leftWrist.y - leftElbow.y,
    leftWrist.x - leftElbow.x
  );

  if (angle1 >= angle2) {
    angle = (angle1 - angle2) * (180 / Math.PI);
    angle = angle % 180;
  } else {
    angle = (angle2 - angle1) * (180 / Math.PI);
    angle = angle % 180;
  }

  if (
    leftWrist.score > 0.3 &&
    leftElbow.score > 0.3 &&
    leftShoulder.score > 0.3
  ) {
    returnAngle = angle;
  }

  return returnAngle;
};
