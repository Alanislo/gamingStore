package com.wellplayed.gaming.store;

import com.wellplayed.gaming.store.models.*;
import com.wellplayed.gaming.store.repositories.BuyRepository;
import com.wellplayed.gaming.store.repositories.ClientRepository;
import com.wellplayed.gaming.store.repositories.ComponentRepository;
import com.wellplayed.gaming.store.repositories.TicketRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.util.Arrays;

@SpringBootApplication
public class WellPlayedApplication {

    private LocalDateTime localDateTime = LocalDateTime.now();

    public static void main(String[] args) {
        SpringApplication.run(WellPlayedApplication.class , args);
    }

    @Bean
    public CommandLineRunner initData(ClientRepository clientRepository, ComponentRepository componentRepository, BuyRepository buyRepository, TicketRepository ticketRepository) {
        return args -> {
/*
            Component mouseHyperX1 = new Component("Mouse", "HyperX", "Pulsefire Core - RGB Gaming Mouse", "The HyperX Pulsefire Core delivers the essentials for gamers looking for a solid, comfortable, wired RGB gaming mouse. The Pixart 3327 optical sensor gives players precise, smooth tracking with no hardware acceleration, and has native DPI settings up to 6200 DPI. The ergonomically-designed Pulsefire Core has textured side grips for a comfortable, no-slip grip, and its symmetrical shape is suitable for both palm and claw grip.", Arrays.asList("Pixart 3327 optical sensor","6200 DPI / 220 IPS / 30G", "Customizable with HyperX NGENUITY software", "Weight: 87g"), Arrays.asList("Pink"), Arrays.asList("https://i.imgur.com/I6NjQxV.jpg", "https://i.imgur.com/hz9vCpq.jpg", "https://i.imgur.com/ePu6lxu.jpg", "https://i.imgur.com/7NTesn7.jpg", "https://i.imgur.com/kHj9IF3.jpg"), 29.99, 5);

            Component keyboardHyperX1 = new Component("Keyboard", "HyperX", "Alloy Elite 2 - Mechanical Gaming Keyboard", "For gamers, streamers, and multi-taskers who need to have more control at their fingertips, the HyperX Alloy Elite 2 is the keyboard for you. With dedicated media keys and a large volume wheel, this fully-featured gaming keyboard’s ready for everything from video editing to watching movies.", Arrays.asList("RGB Backlighting", "Customizable with NGENUITY Software", "HyperX Pudding Keycaps (ABS)"), Arrays.asList("Black"), Arrays.asList("https://i.imgur.com/kGRWysa.jpg", "https://i.imgur.com/qU1Y3EU.jpg", "https://i.imgur.com/argMHb0.jpg", "https://i.imgur.com/kyniuzJ.jpg"), 190.99, 8);

            Component microphoneHyperX1 = new Component("Microphone", "HyperX", "QuadCast S – USB Condenser Gaming Microphone", "The HyperX QuadCast™ S is a USB condenser microphone that both sounds great and looks great. The supremely stunning RGB lighting and dynamic effects will add style and flair to any stream or setup and is customizable via HyperX NGENUITY software. The QuadCast S is an all-inclusive mic, featuring an anti-vibration shock mount to help quiet the rumbles of daily life and a built-in pop filter to muffle plosive sounds. Instantly know your mic status with the LED indicator, and simply tap-to-mute to avoid awkward broadcasting accidents.", Arrays.asList("RGB Backlighting", "Customizable with NGENUITY Software", "Tap-to-Mute Sensor with LED indicator", "Stereo, Omnidirectional, Cardioid, Bidirectional"), Arrays.asList("Black", "White"), Arrays.asList("https://i.imgur.com/4cMXDJl.jpg", "https://i.imgur.com/n4yrosp.jpg",  "https://i.imgur.com/cKeq3y1.jpg", "https://i.imgur.com/H2wMzd3.jpg"), 129.99, 100);

            Component headphoneHyperX1 = new Component("Headphone", "HyperX", "Cloud III - Gaming Headset", "The HyperX Cloud III is an evolution of our legendary Cloud II, which is known for its comfort, sound quality and durability. With plush HyperX signature memory foam in the headband and ear cushions, it provides a comfortable fit perfect for long gaming sessions. It also features new, retuned 53mm drivers that are angled for an optimal listening experience.", Arrays.asList("HyperX Signature Comfort and Durability", "Angled 53mm Drivers, Tuned for Impeccable Audio", "Crystal-Clear 10mm microphone, noise-cancelling, with LED mic-mute indicator", "Multiplatform Compatible with 3.5mm, USB-C, and USB-A\n"), Arrays.asList("Black-Red", "Black"), Arrays.asList("https://i.imgur.com/LNedJ4a.jpg", "https://i.imgur.com/uZpsZCB.jpg", "https://i.imgur.com/M13pQBt.jpg", "https://i.imgur.com/B1sV3Lx.jpg", "https://i.imgur.com/sv5Kom6.jpg"), 99.99, 100);



            componentRepository.save(mouseHyperX1);
            componentRepository.save(microphoneHyperX1);
            componentRepository.save(keyboardHyperX1);
            componentRepository.save(headphoneHyperX1);

            Component microphoneLogitech1 = new Component("Microphone", "Logitech", "Yeti GX", "Yeti GX is a premium RGB gaming mic powered by LIGHTSYNC and designed specifically for game streamers. Combining a custom dynamic capsule with advanced software, this USB microphone rejects noise and key clicks, improves your sound and ensures consistent high-quality audio while you stream.", Arrays.asList("Lightsync RGB","Dynamic Supercardoid Mic Capsule", "Broadcast-Quality Audio"), Arrays.asList("Black"), Arrays.asList("https://i.imgur.com/aH09N0Z.jpg", "https://i.imgur.com/cmIqoRx.jpg", "https://i.imgur.com/35Ic2Jd.jpg", "https://i.imgur.com/wZnMnen.jpg", "https://i.imgur.com/8cTx7ZB.jpg"), 149.99, 100);

            Component mouseLogitech1 = new Component("Mouse", "Logitech", "G705", "From the Aurora Collection, G705 Wireless Gaming Mouse is contoured for comfort and control with an intentional design to be inclusive of smaller hands. Features gaming-grade LIGHTSPEED wireless, LIGHTSYNC RGB, and advanced gaming technology.", Arrays.asList("Shaped For Comfort","Wireless", "Compact and Power-Packed"), Arrays.asList("White"), Arrays.asList("https://i.imgur.com/PFs4Yhh.jpg", "https://i.imgur.com/QaMYztG.jpg", "https://i.imgur.com/uGY1Nev.jpg"), 199.99, 100);

            Component keyboardLogitech1 = new Component("Keyboard", "Logitech", "PRO X TKL", "A championship-trusted wireless gaming keyboard designed for the highest levels of competitive play. Designed with pros and engineered to win.", Arrays.asList("RGB lighting with LIGHTSYNC","NEW Game Mode Lock function", "Designed for Pros to Win Championships"), Arrays.asList("Pink", "Black", "White"), Arrays.asList("https://i.imgur.com/mGVusJ0.jpg", "https://i.imgur.com/cFXHaem.jpg", "https://i.imgur.com/7Yiry2u.jpg", "https://i.imgur.com/draDAig.jpg"), 199.99, 100);

            Component headphoneLogitech1 = new Component("Headphone", "Logitech", "PRO X 2 LIGHTSPEED", "Designed with pros. Engineered to win. PRO X 2 LIGHTSPEED headset features pro-grade sound, LIGHTSPEED wireless, and supreme comfort for the highest levels of competition. Hear every footstep, action, and pin pull with the immersive soundscape enabled by graphene drivers.", Arrays.asList("50mm Graphene Drivers","Lightspeed Wireless", "6mm Cardioid Microphone"), Arrays.asList("Pink", "Black", "White"), Arrays.asList("https://i.imgur.com/7PgeeRY.jpg", "https://i.imgur.com/TRNCiAj.jpg", "https://i.imgur.com/HT8DJPY.jpg", "https://i.imgur.com/1DQDm1N.jpg", "https://i.imgur.com/yskh36H.jpg"), 249.99, 100);




            componentRepository.save(microphoneLogitech1);
            componentRepository.save(mouseLogitech1);
            componentRepository.save(keyboardLogitech1);
            componentRepository.save(headphoneLogitech1);


            Component headphoneAstro1 = new Component("Headphone", "Astro", "Astro A50", "Experience the performance and sound of ASTRO Audio V2 with the convenience and freedom that comes without wires. The A50 Wireless Headset for Xbox, PlayStation, and PC/Mac delivers top-of-the-line acoustics, ergonomics, and durability that professional gamers demand with the revolutionary, iconic ASTRO Gaming design. Experience Absolute Immersion with the A50 Wireless + Base Station.", Arrays.asList("Built-In MixAmp","Flip to Mute Microphone", "Dolby Audio"), Arrays.asList("Black-Gold", "Black-Grey"), Arrays.asList("https://i.imgur.com/bmbLdl5.jpg", "https://i.imgur.com/guD8Itl.jpg", "https://i.imgur.com/8EwiqjM.jpg", "https://i.imgur.com/eHPgRW6.jpg", "https://i.imgur.com/n4GzOe6.jpg"), 299.99, 100);

            Component mouseZowie1 = new Component("Mouse", "Zowie", "EC3-CW Wireless Mouse For Esports", "EC's trademark shape is a very widely used option for players who prefer asymmetrical ergo design.The top shell provides a natural curve for your hand with a relaxed support to your palm and fingers, providing more stability when moving horizontally. EC's classic shape has not-too-much palm contact and can accommodates different grip styles with comfortable posture. Reduce the fatigue of flexor carpi ulnaris muscle (FCU) when doing fast clicking", Arrays.asList("Wireless design with enhanced receiver","Asymmetrical ergonomic design with shorter overall length", "Reduced weight; 24-step scroll wheel", "Driverless; plug and play"), Arrays.asList("Black"), Arrays.asList("https://i.imgur.com/g0bxHxS.jpg", "https://i.imgur.com/1IDcjpl.jpg", "https://i.imgur.com/pygEgEz.jpg", "https://i.imgur.com/OHZZPyh.jpg", "https://i.imgur.com/VBzfRY2.jpg"), 149.99, 100);

            Component keyboardGamdia1 = new Component("Keyboard", "Gamdia", "HERMES P2", "The HERMES P2 is an optical-mechanical gaming keyboard with all the features of a premium mechanical keyboard. Featuring the all-new speedy and responsive optical gaming switches, 16.8 million RGB backlit, a solid metal backplate and a comfortable ergonomic wrist rest. The keyboard features a solid metal faceplate for lightweight stability and a built-in ergonomic wrist rest for maximum comfort.", Arrays.asList("Anti-ghosting with N-key rollover", "Metal back plating Mechanical Keyboard", "Ergonomic Wrist Rest", "GAMDIAS Certified Mechanical Optical Switches"), Arrays.asList("Black"), Arrays.asList("https://i.imgur.com/yYCk8J3.jpg", "https://i.imgur.com/cBPakxc.jpg", "https://i.imgur.com/LIddrIt.jpg"), 149.99, 100);

            Component microphoneRode1= new Component("Microphone", "Rode", "PodMic USB", "The PodMic USB is an ultra-versatile dynamic microphone ideal for podcasting, streaming, gaming, voice overs, and other speech applications for content creation. It delivers rich, full-bodied sound and features both an XLR and USB output for connecting to an audio interface or mixer like a classic broadcast microphone, or directly to a computer for plug-and-play recording.", Arrays.asList("Ultra-low-noise, high-gain Revolution Preamp", "Analog XLR and digital USB-C connectivity", "Fully compatible with Windows and Mac computers, and iOS and Android devices", "Broadcast-quality dynamic microphone"), Arrays.asList("Black"), Arrays.asList("https://i.imgur.com/CKhmgnO.jpg", "https://i.imgur.com/v2PYQFy.jpg", "https://i.imgur.com/6oYxam6.jpg", "https://i.imgur.com/c3lR5ft.jpg"), 199.99, 100);



            componentRepository.save(headphoneAstro1);
            componentRepository.save(mouseZowie1);
            componentRepository.save(keyboardGamdia1);
            componentRepository.save(microphoneRode1);


            Client julianBrunelli = new Client("JulianBrunelli@outlook.com", "1234", 43317950, 1925, "36 e/ 123 y 124", "2216178731");
            clientRepository.save(julianBrunelli);

            Buy buyPrueba = new Buy(2,120.0);
            Buy buyPrueba2 = new Buy(4,240.0);
            Ticket ticketPrueba = new Ticket("2",120.0, LocalDateTime.now(), BuyType.DEBIT);
            Ticket ticketprueba2 = new Ticket("6775",240.0, LocalDateTime.now(), BuyType.CREDIT);

            julianBrunelli.addTicket(ticketPrueba);
            ticketRepository.save(ticketPrueba);

            ticketPrueba.addBuy(buyPrueba);
            buyRepository.save(buyPrueba);

            mouseHyperX1.addBuy(buyPrueba);
            buyRepository.save(buyPrueba);

            Client gabrielBarbera = new Client("GabrielBarbera@outlook.com", "1234", 20056784, 1925, "36 e/ 123 y 124", "115351458");
            clientRepository.save(gabrielBarbera);

            gabrielBarbera.addTicket(ticketprueba2);
            ticketRepository.save(ticketprueba2);

            ticketprueba2.addBuy(buyPrueba2);
            buyRepository.save(buyPrueba2);

            mouseHyperX1.addBuy(buyPrueba2);
            buyRepository.save(buyPrueba2);



            Client maximilianoLedesma = new Client("MaximilianoLedesma@outlook.com", "1234", 21056784, 1925, "36 e/ 123 y 124", "115351456");
            clientRepository.save(maximilianoLedesma);

            Client alanisLobato = new Client("AlanisLobato@outlook.com", "1234", 43417900, 1925, "36 e/ 123 y 124", "2216204142");
            clientRepository.save(alanisLobato);

            Client darylBaptie = new Client("DarylBaptie@outlook.com", "1234", 35042684, 1925, "36 e/ 123 y 124", "114972353");
            clientRepository.save(darylBaptie);

*/

        };
    }

}