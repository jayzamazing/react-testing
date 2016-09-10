var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Image = require('../public/js/image');

describe('Image component', function() {
    it('Renders the image and description',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";
        //create instance of render
        var renderer = TestUtils.createRenderer();
        //render an image component
        renderer.render(<Image url={url} description={description} />);
        //get the rendered react component to test against
        var result = renderer.getRenderOutput();
        //test props for various values
        //check class name is correct
        result.props.className.should.equal('gallery-image');
        //get img prop
        var img = result.props.children[0];
        //check type is image
        img.type.should.equal('img');
        //check src is correct
        img.props.src.should.equal(url);
        //check description is correct
        img.props.alt.should.equal(description);
        //get the p tag
        var p = result.props.children[1];
        //check the type
        p.type.should.equal('p');
        //ensure p has description
        p.props.children.should.equal(description);
    });
});
