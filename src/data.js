const data = {
  event: {
    title: "TBG Big Charity Event",
    description: ["Lorem ipsum dolor sit amet, ad usu tale quando offendit.", "Ea sed ipsum noluisse partiendo sit. Ut mutat decore altera has, eam ut autem abhorreant"],
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
      thumbnail: "/faces/128-13.jpg",
      donation: 5000,
      comment: "Good luck with your thing!",
      children: [
        {
          name: "Person D",
          thumbnail: "/faces/128-10.jpg",
          donation: 0,
          comment: "Thank you",
          children: [
            {
              name: "Person A",
              thumbnail: "/faces/128-13.jpg",
              donation: 0,
              comment: "No, Thank you!",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Person B",
      thumbnail: "/faces/128-12.jpg",
      donation: 1000,
      comment: "Good luck. Well done! A great achievement for a great cause.",
      children: []
    },
    {
      name: "Person C",
      thumbnail: "/faces/128-11.jpg",
      donation: 4000,
      comment: "Hope all goes well and you successfully achieve your goal. A cause close to our hearts.",
      children: []
    },

  ]
};

export default data;
