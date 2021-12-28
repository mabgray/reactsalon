import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    id: 0,
                    name: "Leslie Jones",
                    image: "https://www.emmys.com/sites/default/files/styles/bio_pics_detail/public/Leslie-Jones-bio-450x600.jpg?itok=vgYICO6r",
                    style: " upscale and trendy."
                    
                },
                {
                  id: 1,
                  name: "Kate McKinnon",
                  image: "https://www.interviewmagazine.com/wp-content/uploads/2019/10/190731_SCHORR_INTERVIEW_Shot_01_023_01.jpg",
                  style: "formal and professional"
                },
                {
                    id: 2,
                    name: "Celie Strong",
                    image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JWQRA3HKKMI6XF5AUCORAGA6GY.jpg&w=210",
                    style: "casual"
                }
            ],

        };
    }

    render() {
       
            
                const staffProfiles = this.state.profiles.map(profile => {
                    return (
                        <div className="col" key={profile.id}>
                            <img src={profile.image} alt={profile.name} />
                            <h2>{profile.name}</h2>
                            <p>{profile.style}</p>
                        </div>
                    );
                });
        
                return (
                    <div className="container">
                        <div className="row">
                            {staffProfiles}
                        </div>
                    </div>
                );
            
        
    }
}

export default About;