import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:solana/solana.dart';
import 'package:solana_mobile_client_example/client.dart';

void main() {
  runApp(
    BlocProvider(
      create: (_) => ClientBloc(
        SolanaClient(
          rpcUrl: Uri.parse('https://api.testnet.solana.com'),
          websocketUrl: Uri.parse('wss://api.testnet.solana.com'),
        ),
      ),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: const Text('Soda Flutter Template'),
          ),
          body: BlocConsumer<ClientBloc, ClientState>(
            listener: (context, state) {
              // ignore: avoid_print, only for example
              print(state.capabilities);
            },
            listenWhen: (previous, current) =>
                previous.capabilities != current.capabilities,
            builder: (context, state) => Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 16,
                  ),
                  child: Text(
                    'Soda x Solana Mobile',
                    style: TextStyle(fontSize: 20),
                  ),
                ),
                Button(
                  onPressed: () => context.read<ClientBloc>().authorize(),
                  text: 'Connect Wallet',
                ),
                Button(
                  onPressed: state.isAuthorized
                      ? () => context.read<ClientBloc>().deauthorize()
                      : null,
                  text: 'Disconnect Wallet',
                ),
                Button(
                  onPressed: state.canRequestAirdrop
                      ? () => context.read<ClientBloc>().requestAirdrop()
                      : null,
                  text: 'Request airdrop(devnet)',
                ),
                Container(
                    height: 550,
                    child: Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Row(
                        children: [
                          Expanded(
                            child: MyForm(),
                          )
                        ],
                      ),
                    )),
              ],
            ),
          ),
        ),
      );
}

class MyForm extends StatefulWidget {
  @override
  _MyFormState createState() => _MyFormState();
}

Call_createNft_function(program , id_for_createNft , name_for_createNft , symbol_for_createNft , uri_for_createNft ,   authority  , payer_for_createNft   , mint_for_createNft   , tokenAccount_for_createNft   , associatedTokenProgram_for_createNft   , rent_for_createNft   ,   systemProgram , tokenProgram_for_createNft   , metadataProgram_for_createNft   , masterEditionAccount_for_createNft   , nftMetadata_for_createNft   ,) {
 // enter your code
}



class _MyFormState extends State<MyForm> {
  final _formKey = GlobalKey<FormState>();
  // variables for account 
  final program = "";
  final authority = "";
  final systemProgram = "";
  final clock = "";
  final payer_for_createNft = "";
  final mint_for_createNft = "";
  final tokenAccount_for_createNft = "";
  final associatedTokenProgram_for_createNft = "";
  final rent_for_createNft = "";
  final tokenProgram_for_createNft = "";
  final metadataProgram_for_createNft = "";
  final masterEditionAccount_for_createNft = "";
  final nftMetadata_for_createNft = "";

  //variables for args
  String id_for_createNft = "";
  String name_for_createNft = "";
  String symbol_for_createNft = "";
  String uri_for_createNft = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Call Instructions from Your IDL')),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text("createNft instruction", style: TextStyle(fontSize: 20)),
                TextFormField(
                  decoration: InputDecoration(labelText: "Enter id"),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your name';
                    }
                    return null;
                  },
                  onSaved: (value) {
                    id_for_createNft = value!;
                  },
                ),
                SizedBox(height: 16),
                Text("createNft instruction", style: TextStyle(fontSize: 20)),
                TextFormField(
                  decoration: InputDecoration(labelText: "Enter name"),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your name';
                    }
                    return null;
                  },
                  onSaved: (value) {
                    name_for_createNft = value!;
                  },
                ),
                SizedBox(height: 16),
                Text("createNft instruction", style: TextStyle(fontSize: 20)),
                TextFormField(
                  decoration: InputDecoration(labelText: "Enter symbol"),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your name';
                    }
                    return null;
                  },
                  onSaved: (value) {
                    symbol_for_createNft = value!;
                  },
                ),
                SizedBox(height: 16),
                Text("createNft instruction", style: TextStyle(fontSize: 20)),
                TextFormField(
                  decoration: InputDecoration(labelText: "Enter uri"),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your name';
                    }
                    return null;
                  },
                  onSaved: (value) {
                    uri_for_createNft = value!;
                  },
                ),
                SizedBox(height: 16),
                ElevatedButton(
                  onPressed: (){
                    Call_createNft_function(program , id_for_createNft , name_for_createNft , symbol_for_createNft , uri_for_createNft ,   authority  , payer_for_createNft   , mint_for_createNft   , tokenAccount_for_createNft   , associatedTokenProgram_for_createNft   , rent_for_createNft   ,   systemProgram , tokenProgram_for_createNft   , metadataProgram_for_createNft   , masterEditionAccount_for_createNft   , nftMetadata_for_createNft   ,);
                  },
                  child: Text("Call createNft Instructions"),
                ),
                SizedBox(height: 16),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class Button extends StatelessWidget {
  const Button({
    super.key,
    this.onPressed,
    required this.text,
  });

  final VoidCallback? onPressed;
  final String text;

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8),
        child: ElevatedButton(
          style: ElevatedButton.styleFrom(
            minimumSize: const Size.fromHeight(40),
          ),
          onPressed: onPressed,
          child: Text(text),
        ),
      );
}


