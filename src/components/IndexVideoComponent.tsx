import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

//@ts-ignore
import output_1920 from '../../assets/output_1920.mp4';
//@ts-ignore
import output_1350 from '../../assets/output_1350.mp4';
//@ts-ignore
import output_770 from '../../assets/output_770.mp4';
//@ts-ignore
import output_400 from '../../assets/output_400.mp4';
import { useBreakpointsType } from '../types/useBreakPointsType';

interface IndexVideoComponentProps extends Partial<React.PropsWithoutRef<React.ReactHTMLElement<HTMLDivElement>>> {

};
const isBrowser = typeof window !== "undefined"

const IndexVideoComponent: React.FC<IndexVideoComponentProps> = ({ ...props }) => {
    const videoProps = {
        width: "1920",
        // height: "1080",
        muted: true,
        playsInline: true,
        autoPlay: true,
        loop: true,
        preload: "auto",

    }
    const hideVidPlaceholder = () => {
        if (!isBrowser)
            return;
        console.log("placeholder fired")
        if (!document?.getElementById("videoPlaceholder")) {
            window.onload = () => {
                document.getElementById("videoPlaceholder").style.display = 'none';
            }
        } else {
            document.getElementById("videoPlaceholder").style.display = 'none';
        }
        setplaceholderImageVisible(false);
    };
    const getInitialState = (vid: HTMLVideoElement) => {
        if (!isBrowser) {
            return true;
        }
        if (!vid)
            return true;
        if (vid.readyState >= 3)
            return false;
        return true;
    }
    const [placeholderImageVisible, setplaceholderImageVisible] = React.useState(
        isBrowser
            ? getInitialState(document?.getElementById("video") as HTMLVideoElement)
            : true
    );

    const mq = useBreakpoint() as useBreakpointsType;
    const showVideo = !mq.prefersReducedData || !mq.prefersReducedMotion
    if (isBrowser) {
        console.log(placeholderImageVisible, document?.getElementById("video"))
    }
    return <React.Fragment>
        {/* <Helmet> */}
        {isBrowser &&
            <script>
                {` var win = window,
                    doc = document,
                    docElem = doc.documentElement,
                    body = doc.getElementsByTagName('body')[0],
                    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
                    if (x < 400) {
                        document.getElementById("video1920").remove();
                        document.getElementById("video1350").remove();
                        document.getElementById("video770").remove();
                        // document.getElementById("video400").remove();
                    } else if (x < 770) {
                        document.getElementById("video1920").remove();
                        document.getElementById("video1350").remove();
                        // document.getElementById("video770").remove();
                        document.getElementById("video400").remove();
                    } else if (x < 1350) {
                        document.getElementById("video1920").remove();
                        // document.getElementById("video1350").remove();
                        document.getElementById("video770").remove();
                        document.getElementById("video400").remove();
                    } else  {
                        // document.getElementById("video1920").remove();
                        document.getElementById("video1350").remove();
                        document.getElementById("video770").remove();
                        document.getElementById("video400").remove();
                    }
                    `}
            </script>
        }
        {/* </Helmet> */}
        {(placeholderImageVisible || !showVideo) &&
            <div

            >
                <StaticImage
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: 'auto',
                        maxHeight: '692px',
                        zIndex: -1,
                    }}
                    itemID="videoPlaceholder"
                    id="videoPlaceholder"
                    className='img'
                    src="../../assets/video_snapshot.png"
                    alt=''
                    layout='fullWidth'
                    placeholder='blurred'
                />
            </div>
        }

        {showVideo && <div className="video-wrapper">
            <video
                onLoad={hideVidPlaceholder}
                onLoadedData={hideVidPlaceholder}
                onLoadedMetadata={hideVidPlaceholder}
                className="hero-image"
                id="video"
                style={{ zIndex: -2 }}
                {...videoProps}
            >
                <source id="video1920" src={output_1920} type="video/mp4" />
                <source id="video1350" src={output_1350} type="video/mp4" />
                <source id="video770" src={output_770} type="video/mp4" />
                <source id="video400" src={output_400} type="video/mp4" />
            </video>
        </div>}
    </React.Fragment>
    // return <React.Fragment>{m.l
    //     ? <video className="hero-image" muted autoPlay loop preload="always" >
    //         <source src={videoMp4} type="video/mp4" />
    //     </video>
    //     : m.s
    //         ? <div className="hero-image " id="hero-image-wrapper">
    //             <StaticImage breakpoints={[250, 350, 450, 650, 800, 1000]} loading="eager" formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/random_hero_1_sm.png' alt="Pohled z dronu na Karlov" layout='fullWidth' imgClassName="hero-image-image" />
    //         </div>
    //         : <div className="hero-image " id="hero-image-wrapper">
    //             <StaticImage breakpoints={[250, 350, 450, 650, 800, 1000]} loading="eager" formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/random_hero_1.png' alt="Pohled z dronu na Karlov" layout='fullWidth' imgClassName="hero-image-image" />
    //         </div>
    // }</React.Fragment>
}

export default IndexVideoComponent;
