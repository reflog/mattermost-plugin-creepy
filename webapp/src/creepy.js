import React from 'react';
import creepyface from 'creepyface'

const modes = ['eli', '23', '27', '68'];

const images = {
    "./eli/0.jpeg": "https://i.imgur.com/4gkxLYD.jpg",
    "./eli/135.jpeg": "https://i.imgur.com/BYx9fA8.jpg",
    "./eli/180.jpeg": "https://i.imgur.com/yi5m0Gf.jpg",
    "./eli/225.jpeg": "https://i.imgur.com/qwazlyU.jpg",
    "./eli/270.jpeg": "https://i.imgur.com/1FwGQwr.jpg",
    "./eli/315.jpeg": "https://i.imgur.com/S8XdiJX.jpg",
    "./eli/45.jpeg": "https://i.imgur.com/qYXRY0c.jpg",
    "./eli/90.jpeg": "https://i.imgur.com/x8AQJFE.jpg",
    "./eli/hover.jpeg": "https://i.imgur.com/dc3AOGo.jpg",
    "./eli/serious.jpeg": "https://i.imgur.com/ODOlmpL.jpg",
    "./23/0.jpeg": "https://i.imgur.com/adeK4sw.jpg",
    "./23/135.jpeg": "https://i.imgur.com/IAOnp09.jpg",
    "./23/180.jpeg": "https://i.imgur.com/yL8utJH.jpg",
    "./23/225.jpeg": "https://i.imgur.com/uOGPJHG.jpg",
    "./23/270.jpeg": "https://i.imgur.com/HI6axHF.jpg",
    "./23/315.jpeg": "https://i.imgur.com/nDtKOFz.jpg",
    "./23/45.jpeg": "https://i.imgur.com/mggSV7l.jpg",
    "./23/90.jpeg": "https://i.imgur.com/hy60OR1.jpg",
    "./23/hover.jpeg": "https://i.imgur.com/pnjeMru.jpg",
    "./23/serious.jpeg": "https://i.imgur.com/k4WR7Xp.jpg",
    "./27/0.jpeg": "https://i.imgur.com/OeW4DC0.jpg",
    "./27/135.jpeg": "https://i.imgur.com/xBxuSEF.jpg",
    "./27/180.jpeg": "https://i.imgur.com/KsZM7BU.jpg",
    "./27/225.jpeg": "https://i.imgur.com/QqK08cV.jpg",
    "./27/270.jpeg": "https://i.imgur.com/NeBblor.jpg",
    "./27/315.jpeg": "https://i.imgur.com/T3W0xD6.jpg",
    "./27/45.jpeg": "https://i.imgur.com/oB3siRt.jpg",
    "./27/90.jpeg": "https://i.imgur.com/h2fEV0x.jpg",
    "./27/hover.jpeg": "https://i.imgur.com/rLoghYn.jpg",
    "./27/serious.jpeg": "https://i.imgur.com/kBDjCTs.jpg",
    "./68/0.jpeg": "https://i.imgur.com/fiB3Lun.jpg",
    "./68/135.jpeg": "https://i.imgur.com/MZwAaMC.jpg",
    "./68/180.jpeg": "https://i.imgur.com/kN9D1HA.jpg",
    "./68/225.jpeg": "https://i.imgur.com/fe7886u.jpg",
    "./68/45.jpeg": "https://i.imgur.com/xPEn0e9.jpg",
    "./68/90.jpeg": "https://i.imgur.com/6TPI4JR.jpg",
    "./68/270.jpeg": "https://i.imgur.com/YqAnYJJ.jpg",
    "./68/315.jpeg": "https://i.imgur.com/gZDz1SG.jpg",
    "./68/hover.jpeg": "https://i.imgur.com/AxlT50K.jpg",
    "./68/serious.jpeg": "https://i.imgur.com/YPyIfVh.jpg",
}

const image = (mode, name) => images[`./${mode}/${name}.jpeg`];



class CreepyLeftSidebarHeader extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = { currentImage: 0 };
    }

    makeItCreepy = () => {
        const img = this.myRef.current;
        const mode = modes[this.state.currentImage];
        this.cancel = creepyface(img, {
            // Time (in ms) to wait between src updates
            throttle: 100,
            // Image URL to display on hover
            hover: image(mode, 'hover'),
            // Each of the images looking at a given direction
            looks: [
                { angle: 0, src: image(mode, '0') },
                { angle: 45, src: image(mode, '45') },
                { angle: 90, src: image(mode, '90') },
                { angle: 135, src: image(mode, '135') },
                { angle: 180, src: image(mode, '180') },
                { angle: 225, src: image(mode, '225') },
                { angle: 270, src: image(mode, '270') },
                { angle: 315, src: image(mode, '315') }
            ],
            // Time (in ms) to restore the default image after the last input
            timeToDefault: 1000
        })
    }

    nextCreeper = () => {
        if (this.cancel) this.cancel();
        this.setState({ currentImage: (this.state.currentImage + 1) % modes.length }, this.makeItCreepy);
    }


    componentDidMount() {
        this.makeItCreepy();
    }

    componentWillUnmount() {
        if (this.cancel) this.cancel();
    }

    render() {
        return <img onClick={this.nextCreeper} ref={this.myRef} src={image(modes[this.state.currentImage], 'serious')} />
    }
}
export default CreepyLeftSidebarHeader;