import * as React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
import * as $ from 'jquery';
import { InjectParams } from '../../store/meta';
import AppStore from '../../store/AppStore';
import AboutStore from './AboutStore';


interface AboutPageProps extends RouteComponentProps {
    appStore?: AppStore;
}

@inject((params: InjectParams) => ({ appStore: params.appStore }))
@observer
class AboutPage extends React.Component<AboutPageProps> {

    aboutStore: AboutStore = new AboutStore();

    // constructor() {
    //     // super(this.props);
    //     // appStore = new AppStore(initialState);

    // }

    componentDidMount() {
        console.log('About page did mounted',
            this.props.appStore && this.props.appStore.firstName)

        this.aboutStore.init();
    }
    render() {
        const appStore = this.props.appStore!;
        return (
            <div className="AboutPage">
                <Helmet>
                    <html lang="en" />
                    <title>About page</title>
                    <meta name="description" content="About page awesome description" />
                    <meta name="keywords" content="About,page,keywords" />
                    <link rel="canonical" href="http://mysite.com" />
                    <link rel="alternate" hrefLang="x-default" href="http://mysite.com" />

                    <meta property="og:title" content={'about'} />
                    <meta property="og:description" content="About page awesome description" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="MySite" />
                    <meta property="og:url" content="http://mysite.com" />
                    <meta property="og:image" content="http://mysite.com/og-image.jpg" />
                    <meta property="og:locale" content="en_EN" />
                </Helmet>

                <h2 onClick={this.aboutStore.increaseCount}>About page components {appStore.firstName}</h2>
                <h3>{this.aboutStore.count}</h3>
            </div>
        );
    }
}

export default AboutPage;
