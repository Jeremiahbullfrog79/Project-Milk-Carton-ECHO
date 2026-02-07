// Age-appropriate scenarios for ECHO game system

const SCENARIOS = {
    '11-13': [
        {
            id: 'mall-separated',
            title: 'Lost at the Mall',
            description: 'Learning what to do when separated from guardians in public',
            difficulty: 1,
            perspectives: {
                child: {
                    intro: "You're at the mall with your mom. She said she'd be right back while she tried on some clothes, but it's been 10 minutes and you can't find the store anymore.",
                    scenes: [
                        {
                            text: "You look around the crowded mall. Your phone is at 5% battery. You feel your heart racing. What do you do?",
                            choices: [
                                {
                                    text: "Ask a friendly-looking stranger for help finding your mom",
                                    nextScene: 1,
                                    safety: 'risky',
                                    explanation: "While many strangers are kind, it's safer to ask employees for help."
                                },
                                {
                                    text: "Find a store employee or security guard",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Great choice! Uniformed employees are the safest people to ask for help."
                                },
                                {
                                    text: "Start walking around calling for your mom",
                                    nextScene: 3,
                                    safety: 'risky',
                                    explanation: "Moving around makes it harder for your mom to find you. Stay in one place."
                                },
                                {
                                    text: "Stay where you are and text your mom your location",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Excellent! Staying put and communicating your location is smart."
                                }
                            ],
                            ariaHint: "Remember the three S's: Stay calm, Stay put, Seek official help."
                        },
                        {
                            text: "A person in regular clothes approaches and says they'll help you find your mom. They seem nice. What do you do?",
                            choices: [
                                {
                                    text: "Politely decline and look for an employee instead",
                                    nextScene: 5,
                                    safety: 'safe'
                                },
                                {
                                    text: "Go with them since they're trying to help",
                                    nextScene: 6,
                                    safety: 'unsafe'
                                },
                                {
                                    text: "Ask them to help you find a security guard together",
                                    nextScene: 7,
                                    safety: 'moderate'
                                }
                            ]
                        },
                        {
                            text: "You find a mall security guard. They ask for your name and your mom's phone number. What information do you share?",
                            choices: [
                                {
                                    text: "Give your first name and mom's phone number only",
                                    nextScene: 8,
                                    safety: 'safe',
                                    explanation: "Perfect! Share only necessary info with officials."
                                },
                                {
                                    text: "Give your full name, address, and all family info",
                                    nextScene: 9,
                                    safety: 'risky',
                                    explanation: "Only share what's needed. Home address isn't necessary here."
                                }
                            ]
                        }
                    ]
                },
                parent: {
                    intro: "You left your child outside a dressing room 'just for a minute' while trying on clothes. When you came out, they were gone. It's been 5 minutes.",
                    scenes: [
                        {
                            text: "Panic sets in. Your child is nowhere near the dressing room. What's your first action?",
                            choices: [
                                {
                                    text: "Immediately notify mall security and give them a description",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! Time is critical. Get professionals involved immediately."
                                },
                                {
                                    text: "Search nearby stores yourself for 10 more minutes first",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Every minute counts. Alert security first, then search."
                                },
                                {
                                    text: "Call your child's phone while heading to security",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good multi-tasking! Communication and professional help both matter."
                                }
                            ],
                            ariaHint: "The first 10 minutes are crucial. Professional help + communication = best outcome."
                        }
                    ]
                },
                community: {
                    intro: "You're a store employee. A child approaches looking worried and says they can't find their parent.",
                    scenes: [
                        {
                            text: "A distressed child tells you they've lost their mom. What's your protocol?",
                            choices: [
                                {
                                    text: "Take the child to your manager and call security immediately",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Follow protocols and keep the child safe and visible."
                                },
                                {
                                    text: "Walk around with the child looking for the parent",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Moving makes reunification harder. Stay at a central location."
                                },
                                {
                                    text: "Keep the child at your register and use the PA system",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Keeping the child visible and announcing helps reunification."
                                }
                            ],
                            ariaHint: "Store policy exists to protect both children and employees. Follow it."
                        }
                    ]
                }
            }
        },
        {
            id: 'online-stranger',
            title: 'New Online Friend',
            description: 'Recognizing safe vs unsafe online interactions',
            difficulty: 2,
            perspectives: {
                child: {
                    intro: "You've been playing your favorite online game for months. Someone you've been playing with regularly wants to video chat outside the game.",
                    scenes: [
                        {
                            text: "Your gaming friend 'SkaterDude23' says they're your age and wants to video chat on Discord. You've played together for 3 months. What do you do?",
                            choices: [
                                {
                                    text: "Tell your parent about it and ask what they think",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Excellent! Trusted adults should know about your online relationships."
                                },
                                {
                                    text: "Agree to video chat since you've known them for months",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Time online doesn't prove identity. People can lie about who they are."
                                },
                                {
                                    text: "Suggest staying in the game chat instead",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Smart! Keeping communication in the game platform is safer."
                                },
                                {
                                    text: "Ask why they want to move off the game platform",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Good thinking! Questioning motives shows critical thinking."
                                }
                            ],
                            ariaHint: "When someone wants to move communication to a different platform, ask yourself: why?"
                        },
                        {
                            text: "They say the game chat is 'for babies' and real friends use Discord. They're starting to make you feel bad. What now?",
                            choices: [
                                {
                                    text: "Recognize this as manipulation and block them",
                                    nextScene: 5,
                                    safety: 'safe',
                                    explanation: "Perfect! Guilt-tripping is a red flag. Real friends respect boundaries."
                                },
                                {
                                    text: "Give in to prove you're not a baby",
                                    nextScene: 6,
                                    safety: 'unsafe',
                                    explanation: "This is manipulation. People who pressure you don't have your best interest in mind."
                                },
                                {
                                    text: "Tell a trusted adult about this pressure",
                                    nextScene: 7,
                                    safety: 'safe',
                                    explanation: "Great choice! This behavior should be reported."
                                }
                            ],
                            ariaHint: "Emotional manipulation is a major warning sign. Trust your gut."
                        }
                    ]
                },
                parent: {
                    intro: "Your child mentions they've made a 'good friend' in an online game and wants to video chat with them.",
                    scenes: [
                        {
                            text: "Your child asks permission to video chat with their online gaming friend. How do you respond?",
                            choices: [
                                {
                                    text: "Have a conversation about online safety and why this raises concerns",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Education and dialogue build critical thinking skills."
                                },
                                {
                                    text: "Say no without explanation and take away their game access",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Punishment without education may make kids hide things from you."
                                },
                                {
                                    text: "Ask questions about this friend and how they met",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Understanding the relationship helps you assess risk."
                                }
                            ],
                            ariaHint: "Your goal: keep communication open so kids come to you with concerns."
                        }
                    ]
                },
                community: {
                    intro: "You're a game moderator. You notice an adult account repeatedly trying to move young players to external platforms.",
                    scenes: [
                        {
                            text: "You see chat logs where an account is asking multiple young players for their Discord handles. What do you do?",
                            choices: [
                                {
                                    text: "Ban the account and report to platform safety team immediately",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! This is predatory behavior and must be reported."
                                },
                                {
                                    text: "Just ban the account and move on",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Reporting is crucial - they may be doing this on other platforms too."
                                },
                                {
                                    text: "Issue a warning first to see if they stop",
                                    nextScene: 3,
                                    safety: 'unsafe',
                                    explanation: "Grooming behavior requires immediate action, not warnings."
                                }
                            ],
                            ariaHint: "Moderators are the first line of defense. Report suspicious patterns."
                        }
                    ]
                }
            }
        },
        {
            id: 'peer-pressure',
            title: 'The Dare',
            description: 'Standing up to peer pressure while maintaining friendships',
            difficulty: 2,
            perspectives: {
                child: {
                    intro: "Your friend group at school dares you to steal a candy bar from the convenience store to prove you're cool.",
                    scenes: [
                        {
                            text: "Your friends are all watching and waiting. They say 'everyone does it' and 'it's just a candy bar.' What do you do?",
                            choices: [
                                {
                                    text: "Refuse and risk being called scared",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Brave choice! Real courage is standing up for what's right."
                                },
                                {
                                    text: "Do it quickly to get it over with",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "One bad choice can have serious consequences. It's not worth it."
                                },
                                {
                                    text: "Suggest doing something else fun instead",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Redirecting to better activities shows leadership."
                                },
                                {
                                    text: "Say you have to go home and text a trusted adult",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Smart exit strategy. Removing yourself from pressure is wise."
                                }
                            ],
                            ariaHint: "Friends who pressure you to break rules aren't acting like friends."
                        }
                    ]
                },
                parent: {
                    intro: "Your child texts you seeming stressed, saying they need to come home early from hanging out with friends.",
                    scenes: [
                        {
                            text: "Your child's text seems urgent but vague. They're asking you to pick them up early. How do you respond?",
                            choices: [
                                {
                                    text: "Go immediately without questions asked",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Be the safe exit first, talk later."
                                },
                                {
                                    text: "Text back asking what's wrong",
                                    nextScene: 2,
                                    safety: 'moderate',
                                    explanation: "It's okay to ask, but act quickly. Don't delay the pickup."
                                },
                                {
                                    text: "Tell them to work it out with their friends",
                                    nextScene: 3,
                                    safety: 'unsafe',
                                    explanation: "When kids ask for help, respond. They may be in trouble."
                                }
                            ],
                            ariaHint: "Being the 'no-questions-asked' safe exit builds trust for bigger emergencies."
                        }
                    ]
                },
                community: {
                    intro: "You're a convenience store clerk. You notice a group of middle schoolers acting suspiciously near the candy aisle.",
                    scenes: [
                        {
                            text: "One kid keeps looking at the door while others huddle near the candy. You suspect shoplifting might be about to happen. What do you do?",
                            choices: [
                                {
                                    text: "Approach them kindly and ask if they need help finding anything",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Good! Your presence alone may prevent the theft without confrontation."
                                },
                                {
                                    text: "Watch from a distance to catch them in the act",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Prevention is better than punishment for kids making a mistake."
                                },
                                {
                                    text: "Call the police immediately",
                                    nextScene: 3,
                                    safety: 'risky',
                                    explanation: "For young kids, intervention and education might be more appropriate first."
                                }
                            ],
                            ariaHint: "Sometimes adult presence and kindness prevent kids from making bad choices."
                        }
                    ]
                }
            }
        },
        {
            id: 'trusted-adults',
            title: 'Who Can I Trust?',
            description: 'Identifying safe adults in different situations',
            difficulty: 1,
            perspectives: {
                child: {
                    intro: "You're walking home from school and realize someone might be following you. You need to find a safe adult quickly.",
                    scenes: [
                        {
                            text: "You're three blocks from home and someone in a car has driven past you twice slowly. Your heart is pounding. Where do you go?",
                            choices: [
                                {
                                    text: "Go into the nearest business with people inside",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Excellent! Public spaces with witnesses are safe."
                                },
                                {
                                    text: "Run home as fast as you can",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Running home shows where you live. Go to a public place instead."
                                },
                                {
                                    text: "Call your parent or 911 while heading to a store",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Perfect! Communicate while getting to safety."
                                },
                                {
                                    text: "Knock on a random house door",
                                    nextScene: 4,
                                    safety: 'moderate',
                                    explanation: "Businesses are better than random houses - more people, more accountability."
                                }
                            ],
                            ariaHint: "Look for places with multiple people: stores, libraries, police/fire stations."
                        }
                    ]
                },
                parent: {
                    intro: "Your child calls you scared, saying they think someone is following them on the way home from school.",
                    scenes: [
                        {
                            text: "Your child is three blocks away and scared. What do you tell them?",
                            choices: [
                                {
                                    text: "Tell them to go into the nearest store and stay there while you come immediately",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect response! Safety first, then immediate action."
                                },
                                {
                                    text: "Tell them to hurry home quickly",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Never direct a child being followed to go home - it reveals where they live."
                                },
                                {
                                    text: "Stay on the phone with them while you drive to get them",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Connection and action together."
                                }
                            ],
                            ariaHint: "Your calm, clear instructions help your child act safely even when scared."
                        }
                    ]
                },
                community: {
                    intro: "A child runs into your coffee shop looking scared and says someone is following them.",
                    scenes: [
                        {
                            text: "A young person bursts in looking frightened, saying a car has been following them. What do you do?",
                            choices: [
                                {
                                    text: "Bring them behind the counter, call their parent, and watch the entrance",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Excellent! Protect, communicate, and monitor."
                                },
                                {
                                    text: "Look outside to see if you see anything suspicious",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Child's immediate safety comes first. Don't leave them alone."
                                },
                                {
                                    text: "Call 911 while keeping the child in your sight",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Professional help is appropriate here."
                                }
                            ],
                            ariaHint: "Businesses are safe havens. Taking a child seriously can save their life."
                        }
                    ]
                }
            }
        }
    ],
    '14-15': [
        {
            id: 'social-media-pressure',
            title: 'The Perfect Image',
            description: 'Navigating social media exploitation and self-worth',
            difficulty: 2,
            perspectives: {
                child: {
                    intro: "A popular account with thousands of followers DMs you saying you could be a model and wants photos.",
                    scenes: [
                        {
                            text: "An account called '@ScoutingTalent' with 50K followers says you have 'model potential' and asks for full body photos in 'casual clothes.' What do you do?",
                            choices: [
                                {
                                    text: "Feel flattered and send the photos they requested",
                                    nextScene: 1,
                                    safety: 'unsafe',
                                    explanation: "This is a common grooming tactic. Real scouts go through proper channels."
                                },
                                {
                                    text: "Check if they're following hundreds of other teens with similar messages",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Smart! Scammers and predators use mass messaging tactics."
                                },
                                {
                                    text: "Ask a parent or trusted adult to vet this account",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Adults can spot red flags you might miss."
                                },
                                {
                                    text: "Block and report the account",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Good instinct! Unsolicited 'opportunities' are usually scams."
                                }
                            ],
                            ariaHint: "Legitimate modeling agencies don't recruit via DMs. They have websites, offices, and formal processes."
                        },
                        {
                            text: "They say 'you're different from other teens' and 'I see something special in you.' They're asking for photos without your parents knowing. Red flag?",
                            choices: [
                                {
                                    text: "Recognize this as textbook grooming language and block immediately",
                                    nextScene: 5,
                                    safety: 'safe',
                                    explanation: "Perfect! 'Keep this secret from parents' is the biggest red flag."
                                },
                                {
                                    text: "Feel special and continue the conversation",
                                    nextScene: 6,
                                    safety: 'unsafe',
                                    explanation: "Predators isolate victims by making them feel uniquely special."
                                }
                            ],
                            ariaHint: "Secrecy + flattery + photo requests = grooming. Every time."
                        }
                    ]
                },
                parent: {
                    intro: "You notice your teen is suddenly very secretive about their phone and mentions someone discovered their 'talent.'",
                    scenes: [
                        {
                            text: "Your teen mentions a 'talent scout' found them online. They're defensive when you ask questions. How do you handle this?",
                            choices: [
                                {
                                    text: "Explain grooming tactics without accusation and offer to investigate together",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Education + collaboration keeps communication open."
                                },
                                {
                                    text: "Demand to see their phone immediately",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Force creates secrecy. Better to build trust and investigate together."
                                },
                                {
                                    text: "Research common modeling scams and share examples",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Concrete examples help teens recognize patterns."
                                }
                            ],
                            ariaHint: "Teens need to understand WHY something is dangerous, not just be told it is."
                        }
                    ]
                },
                community: {
                    intro: "You're a social media safety moderator. You see an account mass-messaging teens about modeling opportunities.",
                    scenes: [
                        {
                            text: "An account with purchased followers is sending identical DMs to hundreds of teens requesting photos. What action do you take?",
                            choices: [
                                {
                                    text: "Immediately ban the account and report to law enforcement liaison",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! This is predatory behavior requiring immediate action."
                                },
                                {
                                    text: "Send a warning to the account first",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Predators don't deserve warnings. Immediate removal protects children."
                                },
                                {
                                    text: "Ban and document the pattern for law enforcement",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Documentation helps prosecute these cases."
                                }
                            ],
                            ariaHint: "Mass messaging + photo requests + teens = predatory pattern requiring immediate action."
                        }
                    ]
                }
            }
        },
        {
            id: 'dating-red-flags',
            title: 'First Relationship',
            description: 'Recognizing healthy vs unhealthy relationship dynamics',
            difficulty: 3,
            perspectives: {
                child: {
                    intro: "You've been dating someone for two months. Lately they're getting angry when you hang out with friends without them.",
                    scenes: [
                        {
                            text: "Your boyfriend/girlfriend texted 'Who are you with? Send me a photo to prove it' for the third time this week. How do you respond?",
                            choices: [
                                {
                                    text: "Send the photo to avoid an argument",
                                    nextScene: 1,
                                    safety: 'unsafe',
                                    explanation: "Compliance reinforces controlling behavior. This is a red flag."
                                },
                                {
                                    text: "Recognize this as controlling behavior and address it directly",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Perfect! Healthy relationships are built on trust, not surveillance."
                                },
                                {
                                    text: "Talk to a trusted adult about this behavior",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Outside perspective helps you see patterns clearly."
                                },
                                {
                                    text: "Set a clear boundary: 'I won't respond to demands for proof. That's not trust.'",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Strong boundary setting! This is healthy relationship communication."
                                }
                            ],
                            ariaHint: "Control disguised as caring is still control. Trust is earned through respect, not surveillance."
                        },
                        {
                            text: "They apologize but then say 'I only act this way because I love you so much.' They promise to change. What do you do?",
                            choices: [
                                {
                                    text: "Give them another chance since they apologized",
                                    nextScene: 5,
                                    safety: 'risky',
                                    explanation: "Watch for actions, not words. Patterns matter more than apologies."
                                },
                                {
                                    text: "Recognize 'I do it because I love you' as a manipulation tactic",
                                    nextScene: 6,
                                    safety: 'safe',
                                    explanation: "Correct! Love doesn't justify control. This is emotional manipulation."
                                },
                                {
                                    text: "End the relationship before the pattern escalates",
                                    nextScene: 7,
                                    safety: 'safe',
                                    explanation: "Brave and wise! Early controlling behavior often escalates."
                                }
                            ],
                            ariaHint: "Healthy love makes you feel free, not monitored. Control escalates over time."
                        }
                    ]
                },
                parent: {
                    intro: "You notice your teen has become withdrawn and is constantly texting someone. Their friends mention the teen's new partner is 'intense.'",
                    scenes: [
                        {
                            text: "Your teen's best friend quietly mentions they're worried about your teen's new relationship. How do you approach your teen?",
                            choices: [
                                {
                                    text: "Thank the friend and have a non-judgmental conversation about healthy relationships",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Education without accusation keeps communication open."
                                },
                                {
                                    text: "Forbid them from seeing this person",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "Prohibition often backfires. Better to educate and stay involved."
                                },
                                {
                                    text: "Share resources about relationship red flags casually",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Indirect education lets them recognize patterns themselves."
                                }
                            ],
                            ariaHint: "Teens in unhealthy relationships need education and support, not isolation."
                        }
                    ]
                },
                community: {
                    intro: "You're a school counselor. A student's friends report that their partner waits outside every class and monitors who they talk to.",
                    scenes: [
                        {
                            text: "Multiple students report concerning controlling behavior in a relationship. What's your approach?",
                            choices: [
                                {
                                    text: "Have a private, non-judgmental conversation with the student being monitored",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! Create a safe space for them to recognize and discuss the behavior."
                                },
                                {
                                    text: "Call both students in together to mediate",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Never mediate abuse. This puts the victim at risk."
                                },
                                {
                                    text: "Provide resources about healthy relationships and keep communication open",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Education and ongoing support help students make safer choices."
                                }
                            ],
                            ariaHint: "School professionals must recognize teen dating violence and intervene appropriately."
                        }
                    ]
                }
            }
        },
        {
            id: 'ride-safety',
            title: 'Getting Home Safe',
            description: 'Transportation safety and trusting your instincts',
            difficulty: 2,
            perspectives: {
                child: {
                    intro: "You're at a party and your ride home fell through. Someone you sort of know offers you a ride.",
                    scenes: [
                        {
                            text: "It's 11pm and you need to get home. Someone from school you've talked to a few times offers a ride. They seem a bit off tonight. What do you do?",
                            choices: [
                                {
                                    text: "Accept the ride - you know them from school",
                                    nextScene: 1,
                                    safety: 'risky',
                                    explanation: "Trust your gut. 'A bit off' is your instinct warning you."
                                },
                                {
                                    text: "Call a parent/guardian for a ride instead",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Perfect! No judgment pick-up agreements save lives."
                                },
                                {
                                    text: "Use a rideshare app and share your trip with someone",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Traceable transportation with trip sharing adds safety."
                                },
                                {
                                    text: "Ask if anyone else needs a ride to share the car",
                                    nextScene: 4,
                                    safety: 'moderate',
                                    explanation: "Better than alone, but still risky if the driver is impaired."
                                }
                            ],
                            ariaHint: "Your instinct saying someone is 'off' is valuable data. Listen to it."
                        }
                    ]
                },
                parent: {
                    intro: "It's 11pm and your teen calls from a party saying they need a ride but sound hesitant about something.",
                    scenes: [
                        {
                            text: "Your teen calls late asking for a ride. They sound uncomfortable but won't say why. How do you respond?",
                            choices: [
                                {
                                    text: "Go immediately with no questions or judgment",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Be the safe exit first. Details can wait."
                                },
                                {
                                    text: "Ask them what's wrong first",
                                    nextScene: 2,
                                    safety: 'moderate',
                                    explanation: "It's okay to ask, but don't delay going to get them."
                                },
                                {
                                    text: "Tell them to figure it out since they went to the party",
                                    nextScene: 3,
                                    safety: 'unsafe',
                                    explanation: "This destroys trust and puts them in danger. Always be the safe option."
                                }
                            ],
                            ariaHint: "The 'no-questions-asked pickup' agreement can literally save your child's life."
                        }
                    ]
                },
                community: {
                    intro: "You're hosting a party and notice some teens trying to convince others to get in cars with drivers who seem intoxicated.",
                    scenes: [
                        {
                            text: "You see teens about to leave with someone who's clearly been drinking. What do you do?",
                            choices: [
                                {
                                    text: "Intervene directly and offer to call parents or rideshares",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Adult intervention prevents tragedy."
                                },
                                {
                                    text: "Mind your own business - they're not your kids",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Community responsibility means protecting all children, not just your own."
                                },
                                {
                                    text: "Take the car keys and arrange safe rides home for everyone",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Preventing drunk driving protects everyone."
                                }
                            ],
                            ariaHint: "Adults who host or supervise have a responsibility to ensure safe transportation."
                        }
                    ]
                }
            }
        },
        {
            id: 'job-interview',
            title: 'First Job Safety',
            description: 'Recognizing legitimate employment vs exploitation',
            difficulty: 2,
            perspectives: {
                child: {
                    intro: "You found a job posting for 'easy money' doing social media promotion. The interview is at someone's apartment.",
                    scenes: [
                        {
                            text: "The job posting promises $500/week for part-time social media work. The interview location is listed as an apartment complex, not a business. Red flags?",
                            choices: [
                                {
                                    text: "Be excited about the money and go to the interview",
                                    nextScene: 1,
                                    safety: 'unsafe',
                                    explanation: "Legitimate businesses have business addresses. Apartments are red flags."
                                },
                                {
                                    text: "Research the company online first",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Smart! Legitimate companies have online presence and reviews."
                                },
                                {
                                    text: "Ask a parent to help vet the opportunity",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Adults can spot employment scams and trafficking schemes."
                                },
                                {
                                    text: "Ask why the interview isn't at a business location",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Good critical thinking! Legitimate employers have good answers."
                                }
                            ],
                            ariaHint: "Too good to be true + residential location + vague job description = danger."
                        }
                    ]
                },
                parent: {
                    intro: "Your teen excitedly tells you about a job opportunity they found online that promises great pay for easy work.",
                    scenes: [
                        {
                            text: "Your teen wants to go to a job interview at an apartment for a vague 'social media' job paying unusually well. What do you do?",
                            choices: [
                                {
                                    text: "Explain common job scams and trafficking recruitment tactics",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Education about these schemes protects them long-term."
                                },
                                {
                                    text: "Just say no without explaining why",
                                    nextScene: 2,
                                    safety: 'risky',
                                    explanation: "They need to understand WHY to spot future scams themselves."
                                },
                                {
                                    text: "Offer to help them find legitimate employment with verifiable businesses",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Supporting their goal while teaching safety."
                                }
                            ],
                            ariaHint: "Teach teens: Legitimate jobs have business locations, named supervisors, and realistic pay."
                        }
                    ]
                },
                community: {
                    intro: "You're a local business owner. You see job postings in teen spaces offering unrealistic pay for vague work.",
                    scenes: [
                        {
                            text: "You notice flyers around the high school offering teens '$500/week easy money.' What do you do?",
                            choices: [
                                {
                                    text: "Report to school administration and local police as potential trafficking recruitment",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! These are common trafficking recruitment tactics."
                                },
                                {
                                    text: "Ignore it - not your problem",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Community awareness prevents exploitation. Report suspicious activity."
                                },
                                {
                                    text: "Remove the flyers and document them for authorities",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Disrupting recruitment and reporting protects teens."
                                }
                            ],
                            ariaHint: "Community members can disrupt trafficking recruitment by staying aware and reporting."
                        }
                    ]
                }
            }
        }
    ],
    '16-17': [
        {
            id: 'college-party-safety',
            title: 'College Visit Reality',
            description: 'Advanced substance and consent awareness',
            difficulty: 3,
            perspectives: {
                child: {
                    intro: "You're visiting a college campus. An older student invites you to a party where everyone's drinking. You notice they're being very insistent and watching what you drink.",
                    scenes: [
                        {
                            text: "At the party, someone hands you a drink that's already open. They're being overly friendly and suggesting you 'loosen up.' What do you do?",
                            choices: [
                                {
                                    text: "Accept the drink to be polite",
                                    nextScene: 1,
                                    safety: 'unsafe',
                                    explanation: "Never accept open drinks. Drink spiking is real and common."
                                },
                                {
                                    text: "Refuse and only drink from containers you opened yourself",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Perfect! This is essential safety protocol at parties."
                                },
                                {
                                    text: "Leave the party immediately and find your group",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent instinct! Pressure to drink + watching = red flags."
                                },
                                {
                                    text: "Pour it out and get your own drink from the source",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Good boundary setting! Only drink what you pour/open yourself."
                                }
                            ],
                            ariaHint: "Watch your drink, pour your own, never leave it unattended. These rules save lives."
                        },
                        {
                            text: "You notice a friend who came with you is very drunk and someone is leading them upstairs. Your friend can barely walk. What do you do?",
                            choices: [
                                {
                                    text: "Assume they want to hookup and stay out of it",
                                    nextScene: 5,
                                    safety: 'unsafe',
                                    explanation: "Someone too drunk to walk cannot consent. This requires intervention."
                                },
                                {
                                    text: "Immediately intervene and get your friend out of there",
                                    nextScene: 6,
                                    safety: 'safe',
                                    explanation: "Perfect! This is how friends protect friends from assault."
                                },
                                {
                                    text: "Get other friends to help you intervene and get your friend safe",
                                    nextScene: 7,
                                    safety: 'safe',
                                    explanation: "Excellent! Group intervention is effective and safer."
                                },
                                {
                                    text: "Tell the person leading them upstairs that you're taking your friend home now",
                                    nextScene: 8,
                                    safety: 'safe',
                                    explanation: "Strong and direct! This stops potential assault."
                                }
                            ],
                            ariaHint: "Too drunk to walk = too drunk to consent. Intervening is not cockblocking, it's preventing assault."
                        }
                    ]
                },
                parent: {
                    intro: "Your teen is visiting colleges overnight. They text you at midnight asking questions about drink safety and seeming uncomfortable.",
                    scenes: [
                        {
                            text: "Your teen texts 'What should I do if I think someone's drink got spiked?' at midnight. How do you respond?",
                            choices: [
                                {
                                    text: "Send immediate action steps: get them to ER, stay with them, call campus security",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Clear, immediate instructions for a potential emergency."
                                },
                                {
                                    text: "Ask if they're okay first",
                                    nextScene: 2,
                                    safety: 'moderate',
                                    explanation: "Check-in is good but prioritize giving them emergency action steps first."
                                },
                                {
                                    text: "Tell them to call 911 and campus security immediately",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Correct! Suspected drugging requires immediate emergency response."
                                }
                            ],
                            ariaHint: "Suspected drink spiking = medical emergency. ER, police, and drug testing within hours."
                        }
                    ]
                },
                community: {
                    intro: "You're an RA. You see someone leading a very intoxicated student to their room. The intoxicated person can barely stand.",
                    scenes: [
                        {
                            text: "You witness someone leading an extremely intoxicated student to a room. The drunk student can't consent to anything right now. What do you do?",
                            choices: [
                                {
                                    text: "Intervene immediately and separate them",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! RAs have a duty to prevent sexual assault."
                                },
                                {
                                    text: "Call campus security and follow protocol",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Good! Professional intervention is appropriate."
                                },
                                {
                                    text: "Assume they're together and let it go",
                                    nextScene: 3,
                                    safety: 'unsafe',
                                    explanation: "Incapacitation means no consent. Relationship status doesn't matter."
                                },
                                {
                                    text: "Check if the intoxicated person needs medical attention",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Important! Severe intoxication can be life-threatening."
                                }
                            ],
                            ariaHint: "RAs are mandatory reporters. Incapacitation + sexual situation = required intervention."
                        }
                    ]
                }
            }
        },
        {
            id: 'labor-trafficking',
            title: 'Dream Job Nightmare',
            description: 'Recognizing sophisticated labor trafficking schemes',
            difficulty: 4,
            perspectives: {
                child: {
                    intro: "You found an amazing summer job opportunity: modeling gig with travel, all expenses paid. They want you to sign a contract and start immediately.",
                    scenes: [
                        {
                            text: "The contract says you'll work 12-hour days, they'll 'hold your passport for safety' during travel, and you have to pay them back for expenses if you quit. Red flags?",
                            choices: [
                                {
                                    text: "Sign it - this is a once-in-a-lifetime opportunity",
                                    nextScene: 1,
                                    safety: 'unsafe',
                                    explanation: "These are textbook trafficking indicators: document control, debt bondage, excessive hours."
                                },
                                {
                                    text: "Have a lawyer review any contract before signing",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Perfect! Legitimate employers support legal review."
                                },
                                {
                                    text: "Research the company thoroughly and look for reviews from other workers",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Trafficking operations have patterns of complaints."
                                },
                                {
                                    text: "Recognize 'holding your passport' as a trafficking red flag and walk away",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Critical awareness! Passport confiscation is a key trafficking indicator."
                                }
                            ],
                            ariaHint: "Red flags: passport control, debt bondage, isolation, excessive hours, too-good-to-be-true promises."
                        },
                        {
                            text: "They pressure you to decide immediately and say 'opportunities like this don't wait.' How do you respond?",
                            choices: [
                                {
                                    text: "Recognize high-pressure tactics as a red flag",
                                    nextScene: 5,
                                    safety: 'safe',
                                    explanation: "Correct! Legitimate employers give time for decision-making."
                                },
                                {
                                    text: "Feel pressured and sign quickly",
                                    nextScene: 6,
                                    safety: 'unsafe',
                                    explanation: "Pressure tactics are used to prevent you from researching or consulting others."
                                },
                                {
                                    text: "Say you need 48 hours to review with your family and lawyer",
                                    nextScene: 7,
                                    safety: 'safe',
                                    explanation: "Perfect! This is reasonable and professional. Their reaction tells you everything."
                                }
                            ],
                            ariaHint: "Pressure to decide immediately = trying to prevent due diligence. Always a red flag."
                        }
                    ]
                },
                parent: {
                    intro: "Your teen is excited about a modeling opportunity that involves international travel. They want to sign a contract immediately.",
                    scenes: [
                        {
                            text: "Your teen shows you a contract that includes passport holding, debt repayment clauses, and immediate start. What do you do?",
                            choices: [
                                {
                                    text: "Recognize trafficking indicators and refuse to allow them to sign",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! These are clear trafficking red flags requiring parental protection."
                                },
                                {
                                    text: "Support their dream without reading the contract carefully",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Parents must protect teens from sophisticated exploitation schemes."
                                },
                                {
                                    text: "Hire an employment lawyer to review and research the company thoroughly",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Professional vetting protects your child."
                                },
                                {
                                    text: "Contact the National Human Trafficking Hotline for guidance",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Smart! Experts can identify trafficking schemes."
                                }
                            ],
                            ariaHint: "Any job involving passport surrender, debt bondage, or isolation requires extreme scrutiny."
                        }
                    ]
                },
                community: {
                    intro: "You're a high school career counselor. Students are sharing flyers for 'modeling opportunities' with suspicious terms.",
                    scenes: [
                        {
                            text: "You see recruitment materials on campus for 'opportunities' with trafficking indicators. What do you do?",
                            choices: [
                                {
                                    text: "Remove materials and report to administration and police",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! Schools must protect students from trafficking recruitment."
                                },
                                {
                                    text: "Host an assembly on recognizing labor trafficking",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Excellent! Education prevents exploitation."
                                },
                                {
                                    text: "Ignore it - students need to learn to make their own decisions",
                                    nextScene: 3,
                                    safety: 'unsafe',
                                    explanation: "Schools have a duty to protect students from predatory recruitment."
                                },
                                {
                                    text: "Create a resource list of legitimate employment opportunities",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Good! Providing safe alternatives reduces vulnerability."
                                }
                            ],
                            ariaHint: "Schools are common trafficking recruitment locations. Staff must recognize and report."
                        }
                    ]
                }
            }
        },
        {
            id: 'bystander-intervention',
            title: 'When You See Something',
            description: 'Advanced bystander intervention and community responsibility',
            difficulty: 3,
            perspectives: {
                child: {
                    intro: "You're at a concert and see someone slip something into another person's drink when they're not looking.",
                    scenes: [
                        {
                            text: "You clearly saw someone put something in someone else's drink. The victim hasn't noticed. What do you do?",
                            choices: [
                                {
                                    text: "Mind your own business - you might be wrong",
                                    nextScene: 1,
                                    safety: 'unsafe',
                                    explanation: "False alarms are better than allowing assault. Always intervene."
                                },
                                {
                                    text: "Immediately tell the potential victim and venue security",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Perfect! Direct intervention can prevent assault."
                                },
                                {
                                    text: "Knock the drink over 'accidentally' while alerting security",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Creative and effective! Removes the immediate danger."
                                },
                                {
                                    text: "Get friends to help you intervene as a group",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Good! Group intervention is safer and more effective."
                                }
                            ],
                            ariaHint: "Drink spiking witnessed = immediate intervention required. You could save someone's life."
                        }
                    ]
                },
                parent: {
                    intro: "Your teen calls upset. They intervened in a potential assault at a party and the person they helped got angry at them.",
                    scenes: [
                        {
                            text: "Your teen is questioning whether they did the right thing by intervening. The person got mad and said they 'ruined their night.' How do you respond?",
                            choices: [
                                {
                                    text: "Affirm that intervening was absolutely the right choice",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Reinforce that intervention is right even when not appreciated."
                                },
                                {
                                    text: "Explain that sometimes saved people don't realize they were in danger",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Good education! Intoxication affects judgment and memory."
                                },
                                {
                                    text: "Tell them you're proud they had the courage to act",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Excellent! Positive reinforcement encourages future intervention."
                                }
                            ],
                            ariaHint: "Support teens who intervene, even when the outcome is uncomfortable. They did right."
                        }
                    ]
                },
                community: {
                    intro: "You're a venue security guard. Someone reports seeing drink spiking but the alleged victim says they're fine.",
                    scenes: [
                        {
                            text: "A bystander reports drink spiking. The alleged victim insists they're fine and wants to stay. What's your protocol?",
                            choices: [
                                {
                                    text: "Take the report seriously regardless of victim's response",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! Drugs affect judgment. Follow safety protocols anyway."
                                },
                                {
                                    text: "Review security footage and watch the situation closely",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Good! Evidence gathering and continued monitoring."
                                },
                                {
                                    text: "Let it go since the person says they're fine",
                                    nextScene: 3,
                                    safety: 'unsafe',
                                    explanation: "An impaired person cannot assess their own safety. Intervene anyway."
                                },
                                {
                                    text: "Remove the alleged perpetrator from the venue",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Protective action! Better safe than sorry."
                                }
                            ],
                            ariaHint: "Security must take spiking reports seriously even when victims minimize."
                        }
                    ]
                }
            }
        },
        {
            id: 'supporting-peers',
            title: 'When Your Friend Needs Help',
            description: 'Recognizing when peers are in danger and how to help',
            difficulty: 3,
            perspectives: {
                child: {
                    intro: "Your best friend confides that their new partner hit them but says 'it was just once' and 'they promised to change.'",
                    scenes: [
                        {
                            text: "Your friend shows you a bruise but defends their partner. They make you promise not to tell anyone. What do you do?",
                            choices: [
                                {
                                    text: "Keep the promise to maintain their trust",
                                    nextScene: 1,
                                    safety: 'unsafe',
                                    explanation: "Some secrets aren't safe to keep. Abuse requires adult intervention."
                                },
                                {
                                    text: "Tell a trusted adult despite the promise",
                                    nextScene: 2,
                                    safety: 'safe',
                                    explanation: "Correct! Breaking confidence to save someone is the right choice."
                                },
                                {
                                    text: "Give your friend resources for domestic violence support",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Providing resources while staying supportive."
                                },
                                {
                                    text: "Tell your friend you're concerned and will help them get help",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Excellent balance of support and action."
                                }
                            ],
                            ariaHint: "Abuse secrets aren't safe to keep. Adults need to know to protect your friend."
                        },
                        {
                            text: "Your friend gets angry when you suggest telling an adult. They say you're overreacting. How do you proceed?",
                            choices: [
                                {
                                    text: "Back off to preserve the friendship",
                                    nextScene: 5,
                                    safety: 'unsafe',
                                    explanation: "Friendship means protecting them even when they're angry about it."
                                },
                                {
                                    text: "Explain why you're telling an adult anyway, gently but firmly",
                                    nextScene: 6,
                                    safety: 'safe',
                                    explanation: "Perfect! True friendship sometimes means making hard choices."
                                },
                                {
                                    text: "Tell a school counselor or trusted adult immediately",
                                    nextScene: 7,
                                    safety: 'safe',
                                    explanation: "Correct! Professional help is essential for abuse situations."
                                }
                            ],
                            ariaHint: "Abuse victims often defend abusers. Your job: get them help regardless."
                        }
                    ]
                },
                parent: {
                    intro: "Your teen's friend confides in you about abuse at home. Your teen begs you not to report it because 'it'll make things worse.'",
                    scenes: [
                        {
                            text: "Your child's friend discloses abuse. Your teen argues reporting will end the friendship and make things worse. What do you do?",
                            choices: [
                                {
                                    text: "Report to authorities despite your teen's objections",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Correct! You're a mandatory reporter, and the child's safety comes first."
                                },
                                {
                                    text: "Respect your teen's wishes to protect their friendship",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Child safety supersedes friendship concerns. You must report."
                                },
                                {
                                    text: "Explain to your teen why reporting is necessary and non-optional",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Good! Education about reporting responsibilities while taking action."
                                }
                            ],
                            ariaHint: "Adults must report child abuse. It's legal and moral obligation, not optional."
                        }
                    ]
                },
                community: {
                    intro: "You're a teacher. A student tells you their friend is being abused but begs you not to tell anyone.",
                    scenes: [
                        {
                            text: "A student discloses their friend's abuse but pleads for confidentiality. What's your response?",
                            choices: [
                                {
                                    text: "Explain you're a mandatory reporter and must report",
                                    nextScene: 1,
                                    safety: 'safe',
                                    explanation: "Perfect! Honest about legal obligations while being supportive."
                                },
                                {
                                    text: "Promise confidentiality to maintain student trust",
                                    nextScene: 2,
                                    safety: 'unsafe',
                                    explanation: "Mandatory reporting laws override confidentiality for abuse disclosures."
                                },
                                {
                                    text: "Thank them for trusting you and immediately file a report",
                                    nextScene: 3,
                                    safety: 'safe',
                                    explanation: "Correct! Acknowledge their courage while fulfilling legal duty."
                                },
                                {
                                    text: "Involve school counselor and social worker immediately",
                                    nextScene: 4,
                                    safety: 'safe',
                                    explanation: "Excellent! Engaging appropriate professionals."
                                }
                            ],
                            ariaHint: "Teachers are mandatory reporters. There's no discretion with abuse disclosures."
                        }
                    ]
                }
            }
        }
    ]
};

// Helper function to get scenarios by age range
function getScenarios(ageRange) {
    return SCENARIOS[ageRange] || [];
}

// Helper function to get specific scenario
function getScenario(ageRange, scenarioId) {
    const scenarios = getScenarios(ageRange);
    return scenarios.find(s => s.id === scenarioId);
}
