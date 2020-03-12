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
            'https://s3-eu-west-2.amazonaws.com/pureoffice--live/wp-content/uploads/2019/05/14135313/nottingham-meeting-room.png',
            'https://honesbusinesspark.co.uk/wp-content/uploads/2017/11/meeting-room.png'
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
            'https://image.shutterstock.com/image-photo/moscow-december-14-2016-modern-260nw-691457149.jpg',
            'https://s3.amazonaws.com/therapyrooms/uploads/listing/7E07963E_1A5C_4689_BB08_0AE4B005AFE1.jpeg'
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
            'https://webcdn.executivecentre.com.cn/wp-content/uploads/sites/43/2019/02/Conference-Room-Etiquettes.jpg',
            'https://xilica.com/wp-content/uploads/2017/07/conference-room-interior-design-for-home-remodeling-marvelous-decorating-with-conference-room-interior-design-ideas.jpg'
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
            'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000/https://www.resourcexpress.com/wp-content/uploads/2019/06/meeting-room-square-6.jpg',
            'https://targetspace.co.uk/wp-content/uploads/2019/09/Aldgate-meeting-room-2-1.jpg'
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
            'https://hamilton-house.org.uk/wp-content/uploads/2015/06/3-good-reasons_meetingRooms.jpg',
            'https://www.theheath.com/wp-content/uploads/2017/09/DSC07279-@sye_lewis.jpg'
        ],
        'A conference hall with theather seating setup',
        ['air conditioner', 'projector', 'microphone', 'wifi']
    )
]

export default ROOMS;