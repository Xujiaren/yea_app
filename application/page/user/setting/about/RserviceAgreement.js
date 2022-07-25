//import liraries
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet ,DeviceEventEmitter} from 'react-native';

import theme from '../../../../config/theme';

// create a component
class RserviceAgreement extends Component {

    static navigationOptions = {
        title:'用户服务使用协议',
        headerRight: <View/>,
    };

    constructor(props){
        super(props);

        const {navigation} = this.props 
        this.type = navigation.getParam('type', 0);

        this.state = {
            type:this.type,
        }
    }


    componentWillMount(){
    }

    componentWillUnmount(){
        const { navigation } = this.props
        const {type} = this.state

        if(type === 1){
            DeviceEventEmitter.emit('infos', {
                infoStatus: 0
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.p_20}
                    showsVerticalScrollIndicator={false}      
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    {'\t'}本应用尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本应用会按照本隐私权政策的规定使用和披露您的个人信息。但本应用将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本应用不会将这些信息对外披露或向第三方提供。本应用会不时更新本隐私权政策。 您在同意本应用服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本应用服务使用协议不可分割的一部分。{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    1、适用范围{'\n'}
                    (a) 在您使用本应用网络服务，或访问本应用平台网页时，本应用自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    您了解并同意，以下信息不适用本隐私权政策：{'\n'}
                    (a) 本应用收集到的您在本应用发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；{'\n'}
                    (b) 违反法律规定或违反本应用规则行为及本应用已对您采取的措施。{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    2、信息使用{'\n'}
(a)本应用不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和本应用（含本应用关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。{'\n'}
(b) 本应用亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何本应用平台用户如从事上述活动，一经发现，本应用有权立即终止与该用户的服务协议。{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    3、信息披露{'\n'}
在如下情况下，本应用将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：{'\n'}
(a) 经您事先同意，向第三方披露；{'\n'}
(b)为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；{'\n'}
(c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；{'\n'}
(d) 如您出现违反中国有关法律、法规或者本应用服务协议或相关规则的情况，需要向第三方披露；{'\n'}
(e) 如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；{'\n'}
(f) 在本应用平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，本应用有权决定向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决。{'\n'}
(g) 其它本应用根据法律、法规或者网站政策认为合适的披露。{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    4、信息存储和交换{'\n'}
本应用收集的有关您的信息和资料将保存在本应用及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本应用收集信息和资料所在地的境外并在境外被访问、存储和展示。{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    5、Cookie的使用{'\n'}
                    (a) 在您未拒绝接受cookies的情况下，本应用会在您的计算机上设定或取用cookies ，以便您能登录或使用依赖于cookies的本应用平台服务或功能。本应用使用cookies可为您提供更加周到的个性化服务，包括推广服务。{'\n'}
                    (b) 您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的本应用网络服务或功能。{'\n'}
                    (c) 通过本应用所设cookies所取得的有关信息，将适用本政策。{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    6、信息安全{'\n'}
                    (a) 本应用帐号均有安全保护功能，请妥善保管您的用户名及密码信息。本应用将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。{'\n'}
                    (b) 在使用本应用网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对{'\n'}
                    </Text>
                    <Text style={[styles.lh20_label,styles.text_just]}>
                    7、本隐私政策的更改{'\n'}
                    (a)如果决定更改隐私政策，我们会在本政策中、本公司网站中以及我们认为适当的位置发布这些更改，以便您了解我们如何收集、使用您的个人信息，哪些人可以访问这些信息，以及在什么情况下我们会透露这些信息。{'\n'}
                    (b)本公司保留随时修改本政策的权利，因此请经常查看。如对本政策作出重大更改，本公司会通过网站通知的形式告知。{'\n'}
                    请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是本应用用户名及密码发生泄露，请您立即联络本应用客服，以便本应用采取相应措施。{'\n'}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    ...theme.base,
    text_just:{
        textAlign:'justify'
    }
});

//make this component available to the app
export default RserviceAgreement;