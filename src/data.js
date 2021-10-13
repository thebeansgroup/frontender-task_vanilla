const data = {
  event: {
    title: "TBG Big Charity Event",
    description: "<p>Lorem ipsum dolor sit amet, ad usu tale quando offendit.</p><p>Ea sed ipsum noluisse partiendo sit. Ut mutat decore altera has, eam ut autem abhorreant.</p>",
    date: "01/07/2016",
    location: "The Office"
  },
  funding: {
    target: 100000,
    raised: 50000
  },
  comments: [
    {
      name: "Person A",
      donation: 5000,
      comment: "Good luck with your thing!",
      imgPath: "./images/faces/128-1.jpg",
      children: [
        {
          name: "Person D",
          donation: 0,
          imgPath: "./images/faces/128-2.jpg",
          comment: "Thank you",
          children: []
        }
      ]
    },
    {
      name: "Person B",
      donation: 1000,
      imgPath: "./images/faces/128-3.jpg",
      comment: "Good luck. Well done! A great achievement for a great cause.",
      children: []
    },
    {
      name: "Person C",
      donation: 4000,
      imgPath: "./images/faces/128-5.jpg",
      comment: "Hope all goes well and you successfully achieve your goal. A cause close to our hearts.",
      children: []
    }
  ]
};

export default data;
