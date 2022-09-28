import * as chakraImages from '../public/chakra/index'
const sahajBenifits = [
    {
        heading : 'बेहतर मानसिक, शारीरिक, भावनात्मक और आध्यात्मिक स्वास्थ्य',
        info : 'सहज योग व्यक्ति को शांत और शांतिपूर्ण बनाता है, जीवन की स्थितियों, तनावों और तनावों से आसानी से और प्रभावी ढंग से निपटने के लिए अधिक सार्थक जीवन जीने में मदद करता है।'
    },
    {
        heading : 'प्यार करने वाला परिवार और अनुकंपा समाज',
        info : 'सहज योग का लाभ केवल व्यक्ति को ही नहीं बल्कि समाज को, राष्ट्र को और अंततः पूरी मानवता को मिलता है।'
    },
    {
        heading : 'धर्म से अध्यात्म तक',
        info : 'सहज योग दुनिया के सभी प्रमुख धर्मों को एकीकृत करता है। सहज योग का अभ्यास दुनिया भर में 130 से अधिक देशों में किसी की जाति, पंथ, नस्ल, धर्म और राष्ट्रीयता के बावजूद लोगों द्वारा किया जाता है।'
    },
    {
        heading : 'सहज योग में अपने अनुभव का पालन करें न कि हम जो कहते हैं',
        info : 'सहज योग ध्यान में आत्म-साक्षात्कार और स्थापना के बाद प्राप्त स्पंदनात्मक जागरूकता के आधार पर, साधक स्वयं स्पंदनों की सच्चाई का न्याय कर सकता है।'
    },
    {
        heading : 'कुंडलिनी जागरण के उपोत्पाद के रूप में स्वास्थ्य लाभ',
        info : 'पारिवारिक जीवन और सामाजिक संबंधों में सद्भाव और प्रेम में सुधार करते हुए साधक कुंडलिनी जागरण के उपोत्पाद के रूप में स्वाभाविक रूप से आंतरिक उपचार के माध्यम से लाभान्वित होता है।'
    },
    {
        heading : 'तनाव, तनाव और चिंताओं से मुक्त अपने व्यक्तित्व की खोज करें',
        info : 'व्यक्ति साहसी, आत्मविश्वासी, प्रेमपूर्ण, शांतिपूर्ण और हर्षित बनता है और कलात्मक प्रतिभाओं का विकास करता है। यह पूरी तरह से वैज्ञानिक अनुभव है जिसमें अंध विश्वास की कोई गुंजाइश नहीं है।'
    },
]

const CHAKRA_INFO = {
        'Muladhaar' : {
            chakraName : 'मूलाधार',
            qualities : 'अबोधिता और विवेकबुद्धि (मूलाधार चक्र)',
            positionExplanation : ['आपका मूलाधार चक्र आपकी संपूर्ण सूक्ष्म ऊर्जा प्रणाली की नींव बनाता है। यह आपके भीतर शाश्वत और अविनाशी गुणों का प्रतिनिधित्व करता है। ये गुण अपनी पूरी क्षमता से तभी प्रकट होते हैं जब आपकी कुंडलिनी ऊर्जा जाग्रत हो जाती है। यह चक्र मूंगा लाल रंग द्वारा दर्शाया गया है। यह पृथ्वी तत्व के साथ निकटता से जुड़ा हुआ है।'],
            qualityExplanation : ['आपका मूलाधार चक्र आपकी संपूर्ण सूक्ष्म ऊर्जा प्रणाली की नींव बनाता है। यह आपके भीतर शाश्वत और अविनाशी गुणों का प्रतिनिधित्व करता है। ये गुण अपनी पूरी क्षमता से तभी प्रकट होते हैं जब आपकी कुंडलिनी ऊर्जा जाग्रत हो जाती है। यह चक्र मूंगा लाल रंग द्वारा दर्शाया गया है। यह पृथ्वी तत्व के साथ निकटता से जुड़ा हुआ है।'],
            image : chakraImages.muladhar,
            qualityList : ['अबोधिता','विवेकबुद्धि','सरलता','बचपन जैसा आनंद','आंतरिक ज्ञान','गौरव','संतुलन', 'उद्देश्य और दिशा', 'पृथ्वी से जुड़ाव', 'प्रकृति के साथ सामंजस्य'],
            paraOne : 'मूलाधार चक्र का मूल गुण मासूमियत है। निर्दोषता धर्मी (धार्मिक) चरित्र का आधार है। आपकी मासूमियत को कभी नष्ट नहीं किया जा सकता है, लेकिन यह आपके अहंकार से ढका हो सकता है, जैसे सूरज बादलों से ढका हो सकता है।',
            paraTwo : 'नकारात्मक सामाजिक प्रभाव भी शुद्ध मासूमियत और ज्ञान को खराब कर सकते हैं जो आपके मूलाधार चक्र का हिस्सा है। अच्छी खबर यह है कि ध्यान उन्हें बहाल कर सकता है। जब आप अपने मूलाधार चक्र को पुनर्संतुलित करते हैं, तो आप अपनी ऊर्जा और प्राथमिकताओं को नवीनीकृत कर सकते हैं।',
            videoLink : 'https://youtu.be/rMo4e0UTcfk',
            briefExplanation : [
'एक संतुलित मूलाधार चक्र आपको अपने आंतरिक ज्ञान को बनाए रखने और बढ़ाने में मदद करेगा। आप जल्दी से सही गलत में अंतर करने में सक्षम होंगे। इस चक्र का ज्ञान आपको उस क्रिया (या निष्क्रियता) से बचने में सक्षम करेगा जो आपके या दूसरों के लिए हानिकारक है।',
'एक संतुलित मूलाधार चक्र भी बेहतर स्मृति, ध्यान और ध्यान को बढ़ावा देगा। भावनात्मक संतुलन और स्थिरता बनाए रखते हुए आप अपनी बौद्धिक ऊर्जा का प्रबंधन करने और निर्णय लेने में सक्षम होंगे।',
'इसके अतिरिक्त, इस चक्र की मासूमियत आपको अन्य लोगों और स्थितियों को बिना किसी पूर्वाग्रह या पूर्वाग्रह के देखने में सक्षम बनाएगी। परिणामस्वरूप आपके कार्य शुद्ध होंगे।'
            ],
            paras : [
'अपने मूलाधार चक्र में दोहन आपको अपनी कुंडलिनी ऊर्जा के साथ-साथ दूसरों को भी जो कुंडलिनी ऊर्जा जागरण के लाभों का अनुभव करना चाहते हैं, बढ़ाने की क्षमता और अधिकार प्रदान करेंगे। आप झूठी सूचनाओं को बेहतर ढंग से पहचानने में सक्षम हो जाएंगे। आप उन लोगों के शिकार नहीं होंगे जो आपको धोखा देंगे या "आपको सवारी के लिए ले जाएंगे।',
'आपका मूलाधार चक्र प्रकृति के साथ सामंजस्य बनाए रखने में आपकी मदद करने में एक भूमिका निभाता है। यह आपको अप्राकृतिक या अस्वस्थ जीवन शैली (जिन्हें "विकृत" या "प्रकृति के विरुद्ध" माना जा सकता है) से बचने में भी मदद करता है। मूलाधार चक्र आपको दूसरों के साथ-साथ अपनी मासूमियत और पवित्रता का सम्मान करने की अनुमति देता है। यह मूलाधार चक्र के माध्यम से है कि जन्म और सृजन अपने पाठ्यक्रम को जारी रखता है।',
'जब आप अपने मूलाधार चक्र में व्यवधान का अनुभव करते हैं, तो कई बीमारियां हो सकती हैं। क्योंकि यह कामुकता और प्रजनन प्रणाली को नियंत्रित करता है, इस चक्र को संतुलित करने से कामुकता या यौन विकृतियों के दुरुपयोग से बचाव होगा। मूलाधार चक्र आपके उत्सर्जन तंत्र को भी नियंत्रित करता है। जब चक्र संतुलित होगा, तो आपका शरीर दस्त या कब्ज से मुक्त हो जाएगा।',
'मूलाधार चक्र को संतुलित करके वाम चैनल की समस्याओं, जैसे अवसाद या सुस्ती को भी रोका जा सकता है। सही चैनल की समस्याएं, जैसे आक्रामक व्यवहार, अत्यधिक सोच, अत्यधिक योजना और अतिरेक को भी समाप्त किया जा सकता है।'
            ],
            atmaMulyankan : ['यदि आपका मूलाधार चक्र संतुलन से बाहर है, तो आप दिशा की खराब भावना, खराब स्मृति, या संतुलन की खराब भावना (गुरुत्वाकर्षण) का अनुभव कर सकते हैं। इस चक्र में व्यवधान के अन्य लक्षणों में उत्सर्जन संबंधी समस्याएं, यौन विकार और प्रजनन संबंधी कठिनाइयां शामिल हैं।'] ,
            howToBalance :  [
'सौभाग्य से, अपने मूलाधार चक्र को संतुलित करना काफी सरल है। शुरू करने के लिए, आपको जितनी बार संभव हो सीधे पृथ्वी पर बैठना चाहिए। बाहर एक शांतिपूर्ण पल का आनंद लेते हुए, आप क्रॉस-लेग्ड फैशन में जमीन पर आराम करके अपना बायां मूलाधार चक्र साफ़ कर सकते हैं। दोनों हाथों को ज़मीन पर अपने कूल्हों के पास रखें, हथेलियाँ नीचे की ओर हों।',
'अगर आप बाहर समय नहीं बिता पा रहे हैं तो दूसरा विकल्प है। अपने पैरों को एक कटोरी गर्म नमकीन पानी में भिगोना भी मूलाधार चक्र को संतुलित करने में सहायक होता है।'
            ],
            backGround : 'red'
        },
        'Swadishthan' : {
            chakraName : 'स्वाधिष्ठान',
            qualities : 'रचनात्मकता (स्वाधिष्ठान चक्र)',
            positionExplanation : ['आपका स्वादिस्थान चक्र आपकी त्रिकास्थि की हड्डी के ऊपर महाधमनी जाल में स्थित है। यह चक्र आपके लीवर, किडनी, प्लीहा, अग्न्याशय और महिला प्रजनन अंगों के कामकाज को नियंत्रित करता है। आपके स्वाधिष्ठान चक्र के कंपन को आपके दोनों हाथों के अंगूठे में महसूस किया जा सकता है।'],
            qualityExplanation : ['स्वादिस्थान चक्र को पीले रंग से दर्शाया जाता है। यह अग्नि को शुद्ध करने वाले तत्व के साथ जुड़ा हुआ है।'],
            image : chakraImages.Swadishthan,
            qualityList : [
'रचनात्मकता',
'सुंदरता की सराहना',
'प्रेरणा',
'आईडिया जनरेशन',
'विचलित ध्यान',
'उत्सुक बौद्धिक धारणा',
'शुद्ध ज्ञान',
'आध्यात्मिक ज्ञान'
            ],
            paraOne : 'स्वाधिष्ठान का मौलिक गुण रचनात्मकता है। इस चक्र के माध्यम से ही आपकी रचनात्मक ऊर्जा उत्पन्न होती है। स्वादिस्थान ध्यान, प्रेरणा और शुद्ध ज्ञान को भी नियंत्रित करता है। जब आप स्वाधिष्ठान चक्र के गुणों के प्रति अपने आप को खोलते हैं, तो आप पाएंगे कि सृजन की सुंदरता और शक्ति आपके भीतर परिलक्षित होती है। आपके पास पहले से ही असीमित मात्रा में रचनात्मकता और ज्ञान है। सहज योग का अभ्यास करने से आप इसका दोहन करना सीखेंगे।',
            paraTwo : '',
            videoLink : 'https://youtu.be/E4f7tvhB55s',
            briefExplanation : [
                'आपके स्वादिस्थान चक्र का सबसे महत्वपूर्ण शारीरिक कार्य आपके पेट के भीतर वसा कणों का टूटना है जो आपके मस्तिष्क के ग्रे और सफेद पदार्थ को बदल देता है - "सोच" की सामग्री।',
                'अत्यधिक सोच और योजना बनाना आज की दुनिया में बहुत आम है। अंतत: आपके स्वाधिष्ठान चक्र का दाहिना भाग उस सब विचार से समाप्त हो सकता है। जब ऐसा होता है, तो आप पा सकते हैं कि आपकी रचनात्मकता लड़खड़ाती है और आपका काम बेजान हो जाता है। आप अब सहजता और आनंद का अनुभव नहीं कर सकते हैं।',
                'ऐसा इसलिए होता है क्योंकि आपका स्वाधिष्ठान चक्र अन्य अंगों की उपेक्षा कर रहा है, जिनका ध्यान रखना चाहिए ताकि आपके द्वारा खोए गए मस्तिष्क के पदार्थ को अधिक विचार के माध्यम से फिर से भर दिया जा सके।'
            ],
            paras : [
                'उदाहरण के लिए, आपके जिगर को आपके शरीर की मांग को पूरा करने के लिए वसा कोशिकाओं का उत्पादन करने के लिए अधिक मेहनत करनी पड़ती है। क्योंकि जिगर ध्यान का स्थान है, आप ध्यान खो देते हैं और शुद्ध विचार से समझौता हो जाता है।',
                'ध्यान (जो स्वाधिष्ठान चक्र का एक गुण है) और विचार (जो इसके लिए हानिकारक है) के बीच अंतर को पहचानना महत्वपूर्ण है। ध्यान का अर्थ है करीब से देखना या सुनना। यह बिना विचार के किसी वस्तु पर शुद्ध ध्यान है। ध्यान एकाग्रता, अवलोकन और साक्षी है।',
                'उदाहरण के लिए, आप अपना ध्यान एक फूल की ओर लगा सकते हैं, उसकी सुंदरता और उसकी सुगंध की सराहना करते हुए, वास्तव में उसके बारे में सोचे बिना। आप इसका अवलोकन करेंगे और आपके मन में बिना किसी प्रश्न के चल रहे होंगे, जैसे "इस फूल का नाम क्या है?" या "मुझे आश्चर्य है कि यह वार्षिक या बारहमासी है? ',
                'एक संतुलित लीवर अशुद्धियों, विकर्षणों और बाहरी अव्यवस्थाओं को छानकर आपकी चौकस रहने की क्षमता को बनाए रखता है और पोषण देता है। शांति और शांति जो आपको प्रभावी ढंग से ध्यान करने में मदद करती है, इस शुद्ध ध्यान से आती है।',
                'जब आपका स्वादिस्थान चक्र संतुलित होता है, तो अत्यधिक सोच को रोका जाता है। आप चिंताओं, शंकाओं, भ्रम और व्याकुलता से मुक्त मन को शांत रखने में सक्षम होंगे। इस संतुलित अवस्था में आप जो रचनात्मक कार्य करते हैं, वह आध्यात्मिक रूप से उन्नत होगा। इसमें "दिल" होगा।'
            ],
            atmaMulyankan : ['यदि आपका स्वादिस्थान चक्र असंतुलित है, तो आप पाएंगे कि आपको ध्यान करने में कठिनाई हो रही है और रचनात्मकता की सामान्य कमी है। आप अनिद्रा और चिड़चिड़ापन का भी अनुभव कर सकते हैं। असंतुलित स्वाधिष्ठान के अन्य लक्षणों में मधुमेह, रक्त संबंधी कैंसर, एलर्जी और हृदय रोग जैसी बीमारियां शामिल हैं।'] ,
            howToBalance :  [
                'सौभाग्य से, ध्यान इस चक्र को संतुलित करने का एक सरल साधन प्रदान करता है। अपने स्वादिस्थान चक्र को साफ करने के लिए आप अपने पैरों को रोजाना सामान्य तापमान के पानी में भिगोएं।',
                'यदि आप अपने दाहिने स्वाधिष्ठान चक्र को साफ करने पर ध्यान केंद्रित करना चाहते हैं, तो ध्यान के दौरान अपने पैरों को नमकीन, ठंडे (यहां तक ​​कि बर्फीले) पानी के कटोरे में भिगो दें। आप स्वादिस्थान की दाहिनी ओर आइस पैक भी रख सकते हैं। यह उस जगह के ठीक ऊपर स्थित होता है जहां आपका धड़ आपके दाहिने पैर से जुड़ता है।',
                'अपने बाएं स्वादिस्थान चक्र को साफ करने के लिए, ध्यान के दौरान अपने पैरों को नमकीन, गर्म पानी की कटोरी में भिगोएँ।',
                'यदि आप इस चक्र के संतुलन के साथ लगातार समस्याओं का अनुभव करते हैं, तो इसे साफ करने के लिए मोमबत्ती की लौ का उपयोग करने का प्रयास करें। बस अपने दाहिने हाथ में मोमबत्ती को अपने बाएं स्वादिस्थान चक्र के सामने कुछ इंच पकड़ें। बायां स्वादिस्थान चक्र उस स्थान के ठीक ऊपर स्थित है जहां आपका धड़ आपके बाएं पैर से जुड़ता है।',
            ],
            backGround : 'red'
        },
}

export {
    sahajBenifits,
    CHAKRA_INFO
}