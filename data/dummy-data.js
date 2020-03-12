import Room from '../models/room';

const ROOMS = [
    new Room(
        'r1',
        'Wolverhampton Centre',
        'Room A',
        '3',
        20,
        'Class',
        [
            'https://www.multiburo.com/export/shared/.medias/pics/centre-bruxelles-sablon/Salle-de-reunion-a-Bruxelles-Sablon-Vergaderzalen-te-huur-in-Brussel-Zavel-Meeting-rooms-for-rent-brussels-Sablon-7.jpg_1791451362.jpg',
            'https://www.mycommunityspace.org.uk/wp-content/uploads/job-manager-uploads/main_image/2018/04/Astor1-1-1200x800.jpg'
        ],
        'Big and bright room with class setup',
        ['wifi', 'refreshments', 'air conditioner', 'projector', 'microphone']
    ),
    new Room(
        'r2',
        'Birmingham Digbeth',
        'Room B',
        '4',
        12,
        'Clinic',
        [
            'https://www.citizenm.com/cache/images/citizenm_schipol_2-0199_web_00ecec985a24cc.jpg',
            'https://media.spacebase.com/media/cache/spaces/5755/citizenm-paris-la-defense-fr-med16_1280.jpg'
        ],
        'A clinic room with default setup',
        ['air conditioner', 'projector']
    ),
    new Room(
        'r3',
        'London City Park',
        'Room C',
        '1',
        50,
        'Conference',
        [
            'https://usandco.com/wp-content/uploads/2019/05/Co-working-Spaces-3_img0.jpg',
            'https://usandco.com/wp-content/uploads/2018/04/b-2.jpg'
        ],
        'Conference room with a big table seating setup',
        ['air conditioner', 'projector', 'microphone', 'wifi']
    ),
    new Room(
        'r4',
        'Luton Station',
        'Room D',
        '5',
        12,
        'Small',
        [
            'https://usandco.com/wp-content/uploads/2020/02/UsCo-Stratford-6-person-meeting-room-.jpg',
            'https://usandco.com/wp-content/uploads/2020/02/UsCo-Stratford-10-person-boardroom.jpg'
        ],
        'Small meeting room with a TV',
        ['air conditioner', 'projector', 'tv', 'wifi']
    ),
    new Room(
        'r5',
        'NHS HQ',
        'Room E',
        '2',
        50,
        'Hall',
        [
            'https://usandco.com/wp-content/uploads/2018/04/co-working-could-be-the-best-decision-you-ever-made.jpg',
            'https://usandco.com/wp-content/uploads/2020/02/UsCo-Stratford-10-person-boardroom.jpg'
        ],
        'A conference hall with theather seating setup',
        ['air conditioner', 'projector', 'microphone', 'wifi']
    )
]

export default ROOMS;