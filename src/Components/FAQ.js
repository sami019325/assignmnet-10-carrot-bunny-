import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Is any free course?
                </div>
                <div className="collapse-content">
                    <p>We are working to make some courses free but right now there is no free course</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Is one time pay applicable for new courses?
                </div>
                <div className="collapse-content">
                    <p>Yes!</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Are you real?
                </div>
                <div className="collapse-content">
                    <p>Yes! we provide genuine program</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;