import React from 'react';
import { connect } from 'react-redux';
import { addPost } from './action';
import Wrapper from './mowaWrapper';
import WelcomeBanner from '../../components/WelcomeBanner';
import BottomBanner from '../../components/BottomBanner';
import Navigation from '../../components/Navigation';
import LeftSideBanner from '../../components/LeftSideBanner';
import RightSideBanner from '../../components/RightSideBanner';
import MainContent from '../../components/MainContent';

function Mowa(props) {
    const { isBullpenDone, isDogDripDone, isIlbeDone, isClienDone } = props;

    let loadingDone = false;

    if (isClienDone && isBullpenDone && isIlbeDone) {
        loadingDone = true;
    }

    return (
        <Wrapper>
            <WelcomeBanner />
            <Navigation tabsInfo={props.tabs} />
            <LeftSideBanner />
            {loadingDone && (
                <MainContent
                    dogDrip={props.dogDrip}
                    bullpen={props.bullpen}
                    ilbe={props.ilbe}
                    clien={props.clien}
                />
            )}
            <RightSideBanner />
            <BottomBanner />
        </Wrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        tabs: state.mowa.tabs,
        dogDrip: state.mowa.dogDrip,
        bullpen: state.mowa.bullpen,
        ilbe: state.mowa.ilbe,
        clien: state.mowa.clien,
        isBullpenDone: state.mowa.isBullpenDone,
        isDogDripDone: state.mowa.isDogDripDone,
        isIlbeDone: state.mowa.isIlbeDone,
        isClienDone: state.mowa.isClienDone,
    };
};

const mapDispatchToProps = { addPost };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Mowa);
