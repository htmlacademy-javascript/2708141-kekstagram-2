import {COMMENTS, NAMES, NUMBERS} from './dataArrays.js';
import {randomValue} from './utils.js';

export const photoDescription = function (commentsValue, minLikesValue, maxLikesValue, avatarsValue) {

  let count = 0;
  const photoDescriptionArray = [];

  for (let i = 1; i < commentsValue; i += 1) {
    const randomLikesValue = randomValue(minLikesValue, maxLikesValue);
    const randomCommentsValue = randomValue(COMMENTS.length);

    const commentsArray = [];

    for (let j = 0; j < randomCommentsValue; j += 1) {
      const randomNameValue = randomValue(NAMES.length);
      const randomCommentValue = randomValue(COMMENTS.length);
      const randomAvatarValue = randomValue(avatarsValue);

      commentsArray.push({
        id: i + count,
        name: NAMES[randomNameValue],
        message: COMMENTS[randomCommentValue],
        avatar: `img/avatar-${randomAvatarValue}.svg`
      });
      count += 1;
    }
    count -= 1;
    photoDescriptionArray.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `${NUMBERS[i - 1]} фото`,
      likes: randomLikesValue,
      comments: commentsArray,
    });
  }
  return photoDescriptionArray;
};
