function kakaoShare(){  
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '색깔로 알아보는 연애유형',
      description: '당신의 색은 어떤 빛깔인가요?',
      imageUrl:
        'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
      },
    },
    itemContent: {
      profileText: 'Hue',
      profileImageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageText: 'Cheese cake',
      titleImageCategory: 'Cake',
      items: [
        {
          item: 'Cake1',
          itemOp: '1000원',
        },
        {
          item: 'Cake2',
          itemOp: '2000원',
        },
        {
          item: 'Cake3',
          itemOp: '3000원',
        },
        {
          item: 'Cake4',
          itemOp: '4000원',
        },
        {
          item: 'Cake5',
          itemOp: '5000원',
        },
      ],
      sum: '총 결제금액',
      sumOp: '15000원',
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
    ]
  });
}