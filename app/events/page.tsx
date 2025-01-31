import Link from 'next/link';
import type { Metadata } from 'next';
import { IEvent } from '../models/event.model';
import { EVENTS } from '../data/events';
import CardEvent from '../components/card-event/card-event';


export const metadata: Metadata = {
    title: 'Eventos | peruanos.dev',
    description: 'Conecta con la comunidad tech en el Perú. Descubre eventos, únete a comunidades y contribuye a proyectos de código abierto realizados por peruanos.',
    openGraph: {
        title: 'Peruanos.dev',
        description: 'Conecta con la comunidad tech en el Perú. Descubre eventos, únete a comunidades y contribuye a proyectos de código abierto.',
    },
};

export default function Events() {

    const upcomingEvents = EVENTS
        .filter((event) => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return (
        <main className="flex w-full max-w-7xl flex-col items-center bg-[var(--color-background)] mx-auto">
            <section className={`py-20 flex flex-col items-start w-full px-8 sm:px-10`}>
                <h1 className="text-6xl text-left font-bold mb-4 leading-[1.4] w-full">Próximos <span className={`text-[var(--color-primary-text)]`}>eventos</span></h1>
                <p className="text-left mb-4 w-full text-[20px]">Conecta con la comunidad tech peruana en eventos, meetups y conferencias. ¿Organizas un evento? ¡Agrégalo a la lista!</p>
                <Link className="px-6 py-3 text-center bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary-hover)] transition" href='https://github.com/lperezp/peruanos.dev/pulls' target='_blank' rel="noopener noreferrer">
                    Publicar un evento
                </Link>
                <div className="flex flex-col gap-6 mt-10 w-full">
                    {upcomingEvents.map((event: IEvent) => (
                        <CardEvent key={event.title} event={event} />
                    ))}
                </div>
            </section>
        </main>
    );
}


