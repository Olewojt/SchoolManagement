import {Client, StompSubscription} from '@stomp/stompjs';
import duckImg from "assets/images/duck.png";

class WebSocketService {
    private client: Client;
    private subscription: StompSubscription | null = null;

    constructor(email: string) {
        this.client = new Client({
            brokerURL: 'ws://localhost:8080/websocket',
            debug: (str) => {
                console.log(str);
            },
            connectHeaders: {
                login: email,
                passcode: 'essunia'
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        this.client.onConnect = this.onConnected;
        this.client.onStompError = this.onError;
    }

    private onConnected = () => {
        console.log('Connected to WebSocket');
        if (this.client) {
            this.subscription = this.client.subscribe('/user/specific', (message) => {
                const messageBody = JSON.parse(message.body);
                const content = messageBody.content;
                console.log(content);

                const isNotified = localStorage.getItem('isNotified') === 'true';

                if (isNotified) {
                    Notification.requestPermission().then(() => {
                        new Notification('School Management', {
                            body: content,
                            icon: duckImg
                        });
                    });
                }
            });
        }
    };


    private onError = (error: unknown) => {
        console.error('WebSocket error', error);
    };

    public connect = () => {
        this.client.activate();
    };

    public disconnect = () => {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.client.deactivate();
    };

    public subscribeToRecords = (callback: (message: string) => void) => {
        console.log("SUBSKRYPCJA!")
        this.subscription = this.client.subscribe('/user/specific', (message) => {
            callback(message.body);
            console.log("DUUPA!")
        });
    };
}

export default WebSocketService;
