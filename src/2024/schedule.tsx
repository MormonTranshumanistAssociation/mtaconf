export function Schedule() {
  return (
    <div className="relative bg-black">
      <div className="mx-auto max-w-md pb-8 px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="text-left mt-0 text-3xl font-extrabold text-yellow-100 tracking-tight sm:text-4xl">
          Schedule
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative bg-stone-800 rounded-xl overflow-hidden">
            <div className="relative rounded-xl overflow-auto">
              <div className="shadow-sm overflow-hidden my-4">
                <table className="border-collapse table-auto w-full text-sm">
                  <thead>
                    <tr>
                      <th className="border-b border-stone-600 font-medium p-4 pl-8 pt-0 pb-3 text-stone-400 text-left">
                        Time
                      </th>
                      <th className="border-b border-stone-600 font-medium pl-2 pr-4 pt-0 pb-3 text-stone-400 text-left">
                        Description
                      </th>
                      <th className="border-b border-stone-600 font-medium pl-2 pr-8 pt-0 pb-3 text-stone-400 text-left">
                        Speaker
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-stone-700 text-left">
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        8:30 am
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Pre-conference check-in
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        9:00 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Welcome
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Carl Youngblood
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        9:05 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Algorithmic Advent: Great Expectations on the Verge of
                        AGI
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Carl Youngblood
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        9:15 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300 italic">
                        The Morning Breaks
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        <a href="https://www.facebook.com/Q.Mischief">
                          Mischief Quartet
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        9:20 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        The Second War in Heaven
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Lincoln Cannon
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        9:40 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Who You Callin’ Artificial? The Collapse of the
                        Supernatural
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Chris Bradford
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        9:50 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Playing God: The Implications of Christian Theology for
                        AGI
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Micah Redding
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        10:10 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Brief Remarks from MTA Officers
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Bryant Smith
                        <br />
                        Connie Packer
                        <br />
                        Dallin Bradford
                        <br />
                        Joseph West
                        <br />
                        Spencer Cannon
                        <br />
                        Teresa Pratt
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        10:25 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        On Earth As It Is in Heaven: The Power of AI Art in
                        Reifying Our Visions
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Bryce Haymond
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        10:35 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        What If It All Works Out? Positive Visions of AI
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Jon Ogden
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        10:45 am
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Break
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        10:55 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300 italic">
                        Somewhere
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        <a href="https://www.facebook.com/Q.Mischief">
                          Mischief Quartet
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        11:00 am
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Keynote - Alt.AI: Why the Best Future of Machine
                        Learning is Modest
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Benjamin Peters
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        11:45 am
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Q&A
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        12:00 pm
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Lunch
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        1:00 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Making Kin with Chatbots at the End of the World
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Tamara Kneese
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        1:15 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Incarnation: Some Theological-Historical Notes
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Rachael Givens Johnson
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        1:30 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        The Plan of Salvation as a Posthuman Solution to the
                        Intelligence Control Problem
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Dan Moore
                        <br />
                        McKay Moore
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        1:40 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        God Hates Singletons
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Wolf Tivy
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        2:00 pm
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Break
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        2:20 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        “All Spirit is Matter”: What Will Spiritual Engineering
                        and Uploading Be Like?
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Brent Allsop
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        2:30 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        AI Mastery through ASK: Nurturing Religious Education
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Matt Gardner
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        2:40 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Fact, Fiction, and Fantasy: Demystifying AI Hype in the
                        Information Age
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Nancy Fulda
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        3:00 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Keynote
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Irina Rish
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        3:45 pm
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Q&A
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        4:00 pm
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Break
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        4:10 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Collective Intelligence vs. Artificial Intelligence
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Evan Hadfield
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        4:20 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Where Gods Began to Be: <em>Interstellar</em> as a
                        Portrayal of Mormon Cosmology
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Conor White-Sullivan
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        4:30 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Contesting Values Alignment: A Challenge of Dynamic
                        Sociality and Teleology
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        C. Randall Paul
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        4:40 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Is Intelligence Bigger than Computation?
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Luke Hutchison
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        4:50 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        AI and Spirit Intelligence
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Caleb Jones
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        5:00 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300 italic">
                        I Saw a Mighty Angel Fly
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        <a href="https://www.facebook.com/Q.Mischief">
                          Mischief Quartet
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        5:05 pm
                      </td>
                      <td className="border-b border-stone-600 p-2 text-stone-300">
                        Panel Discussion: Ben, Irina, Wolf
                      </td>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pr-8 text-stone-300">
                        Lincoln Cannon
                        <br />
                        (Moderator)
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap border-b border-stone-600 p-2 pl-8 text-stone-300">
                        6:00 pm
                      </td>
                      <td
                        className="border-b border-stone-600 p-2 text-stone-300"
                        colSpan={2}
                      >
                        Dinner with entertainment from Mischief Quartet
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
