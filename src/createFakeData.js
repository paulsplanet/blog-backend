import Post from './models/post';

export default function createFakeDate() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `Post #${i}`,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus, dui sit amet tempus malesuada, lectus ex placerat sapien, ut interdum tortor dui vel arcu. Praesent vel enim diam. Quisque condimentum, eros sit amet dictum varius, justo lacus porta augue, quis venenatis massa dui quis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris malesuada quam at quam hendrerit suscipit. Donec lectus neque, hendrerit nec elit quis, mattis semper nisi. Sed ac felis nibh. Aliquam erat volutpat. Maecenas et augue metus. Ut at commodo arcu. Praesent eu orci nec lorem lacinia vestibulum. In porta sem massa, nec efficitur ante feugiat finibus. Curabitur tincidunt id lacus in cursus. Pellentesque ut neque sit amet justo dapibus aliquam cursus nec est. Maecenas rutrum consectetur hendrerit. Vivamus ultrices, dolor eget egestas ullamcorper, libero neque scelerisque dui, et posuere risus ipsum in massa. Aenean tincidunt, ante nec bibendum auctor, nibh dui rutrum ligula, quis consectetur urna risus sit amet risus. Mauris porta vehicula lectus, ac venenatis turpis porttitor id. Etiam non egestas erat. Vestibulum eget ultricies felis, et bibendum metus. Duis feugiat tempor scelerisque. Fusce et efficitur mauris. Donec leo lectus, consequat vitae posuere eget, efficitur et nunc. Nunc vel nulla vitae est cursus mattis et a est. Donec porttitor accumsan justo nec dapibus. Ut nec lectus risus. Vestibulum scelerisque fringilla mauris non tincidunt.',
        tags: ['Fake', 'Data']
    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}