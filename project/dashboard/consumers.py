import asyncio
from time import sleep
from channels.generic.websocket import AsyncWebsocketConsumer
import json



class DashboardConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print('Websocket Connected..')
        await self.accept()
        # await self.close()
        # return await super().connect()
    
    async def receive(self, text_data=None, bytes_data=None):
        print('Message Received from client...',text_data)
        await self.send(text_data='Message from server to client')
        # await self.send(text_data='welcome to dashbord')
        # await asyncio.sleep(10)
        print('T')
        await asyncio.sleep(10)
        print('after asyncio.sleep(10)')
        print('A')
        await DashboardConsumer.receive(self,text_data='Recheckup') #make a rechecker to kept handshake alive 
        print('N')
        
        
        # DashboardConsumer.disconnect(self)
        # return await super().receive(text_data, bytes_data)

    async def disconnect(self, code):
        print('Websocket Disconnected...',code)
        # return await super().disconnect(code)
    