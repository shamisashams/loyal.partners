import React from "react";
import SpcBox from "../../components/SpcBox/SpcBox";
import "./SpecialOffers.css";

const SpecialOffers = () => {
    const offerData = [
        {
            offerTitle: __("offer_title_1"),
            for: __("offer_for_1"),
            package: __("offer_package_1"),
            price: __("offer_price_1"),
            period: __("offer_period_1"),
            p1: __("offer_p1_1"),
            p2: __("offer_p2_1"),
            p3: __("offer_p3_1"),
            p2_deal: __("p2_deal_1"),
            p3_deal: __("p3_deal_1"),
            description: __("offer_description_1"),
        },
        {
            offerTitle: __("offer_title_2"),
            for: __("offer_for_2"),
            package: __("offer_package_2"),
            price: __("offer_price_2"),
            period: __("offer_period_2"),
            p1: __("offer_p1_2"),
            p2: __("offer_p2_2"),
            p3: __("offer_p3_2"),
            p2_deal: __("p2_deal_2"),
            p3_deal: __("p3_deal_2"),
            description: __("offer_description_2"),
        },
        {
            offerTitle: __("offer_title_3"),
            for: __("offer_for_3"),
            package: __("offer_package_3"),
            price: __("offer_price_3"),
            period: __("offer_period_3"),
            p1: __("offer_p1_3"),
            p2: __("offer_p2_3"),
            p3: __("offer_p3_3"),
            p2_deal: __("p2_deal_3"),
            p3_deal: __("p3_deal_3"),
            description: __("offer_description_3"),
        },
    ];
    return (
        <div id="special_offers">
            <div className="wrapper">
                <div className="f35 bold blue">{__("special_offers")}</div>
                <div className="offer_boxes">
                    {offerData.map((item, i) => {
                        return (
                            <SpcBox
                                key={i}
                                offerTitle={item.offerTitle}
                                for={item.for}
                                package={item.package}
                                price={item.price}
                                period={item.period}
                                p1={item.p1}
                                p2={item.p2}
                                p3={item.p3}
                                description={item.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;
