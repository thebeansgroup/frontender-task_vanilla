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
      message: "Good luck with your thing!",
	  image: "128-13",
      children: [
        {
          name: "Person D",
          donation: 0,
          message: "Thank you.",
		  image: "128-10",
          children: []
        }
      ]
    },
    {
      name: "Person B",
      donation: 5000,
      message: "Good luck with your thing!",
	  image: "128-12",
      children: []
    },
    {
      name: "Person C",
      donation: 5000,
      message: "Good luck with your thing!",
	  image: "128-11",
      children: []
    }
  ]
};

export default data;
