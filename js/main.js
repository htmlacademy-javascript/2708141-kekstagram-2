// eslint-disable-next-line no-unused-vars
function generatePhotoDescriptions() {

  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

  const names = [
    'Анастасия',
    'Александр',
    'София',
    'Максим',
    'Анна',
    'Дмитрий',
    'Мария',
    'Иван',
    'Виктория'];

  const numbers = [
    'Первое', 'Второе', 'Третье', 'Четвертое', 'Пятое',
    'Шестое', 'Седьмое', 'Восьмое', 'Девятое', 'Десятое',
    'Одиннадцатое', 'Двенадцатое', 'Тринадцатое', 'Четырнадцатое', 'Пятнадцатое',
    'Шестнадцатое', 'Семнадцатое', 'Восемнадцатое', 'Девятнадцатое', 'Двадцатое',
    'Двадцать первое', 'Двадцать второе', 'Двадцать третье', 'Двадцать четвертое', 'Двадцать пятое'
  ];

  let count = 0;
  const resultPhotoDescriptionArray = [];

  for (let i = 1; i <= 25; i++) {

    const randomLikesValue = Math.floor(Math.random() * (200 - 15 + 1)) + 15;

    const randomCommentsValue = Math.floor(Math.random() * 30);

    const commentsArray = [];

    for (let j = 0; j < randomCommentsValue; j++) {
      const randomNameValue = Math.floor(Math.random() * names.length);
      const randomCommentValue = Math.floor(Math.random() * comments.length);
      const randomAvatarValue = Math.floor(Math.random() * 6);

      commentsArray.push({
        id: i + count,
        name: names[randomNameValue],
        message: comments[randomCommentValue],
        avatar: `img/avatar-${randomAvatarValue}.svg`,
      });

      count++;
    }

    // eslint-disable-next-line no-console
    console.table(commentsArray);
    count--;
    resultPhotoDescriptionArray.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `${numbers[i - 1]} фото`,
      likes: randomLikesValue,
      comments: commentsArray,
    });

  }
  return resultPhotoDescriptionArray;
}

// eslint-disable-next-line no-console
console.table(generatePhotoDescriptions());
