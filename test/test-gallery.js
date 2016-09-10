var React = require('react');
var TestUtils = require('react-addons-test-utils');
var chai = require('chai');
chai.use(require('chai-shallow-deep-equal'));
var should = chai.should();


var Gallery = require('../public/js/gallery');
var Image = require('../public/js/image');

describe('Gallery component', function() {
    it('Renders the gallery',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";
        var url2 = "http://www.example.com/image2.png";
        var description2 = "Other example description";
        //create instance of render
        var renderer = TestUtils.createRenderer();
        //render an image component
        renderer.render(<Gallery images={[{'url': url, 'description': description},
        {'url': url2, 'description': description2}]} />);

        //get the rendered react component to test against
        var result = renderer.getRenderOutput();
        //test props for various values
        //check class name is correct
        result.props.className.should.equal('gallery');
        //get img prop
        var img = result.props.children[0];
        //check type is image
        img.type.should.shallowDeepEqual(Image);
        //check src is correct
        img.props.url.should.equal(url);
        //check description is correct
        img.props.description.should.equal(description);
        //get img prop
        var img = result.props.children[1];
        //check type is image
        img.type.should.shallowDeepEqual(Image);
        //check src is correct
        img.props.url.should.equal(url2);
        //check description is correct
        img.props.description.should.equal(description2);

    });
});
